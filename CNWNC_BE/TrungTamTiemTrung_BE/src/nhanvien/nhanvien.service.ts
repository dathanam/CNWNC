import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { nhanvien } from './nhanvien.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from 'src/role/role.enum';

var randomstring = require("randomstring");
let code = randomstring.generate(7);
const nodemailer = require('nodemailer');

@Injectable()
export class NhanVienService {
    constructor(
        @InjectRepository(nhanvien)
        private readonly nhanVienRepo: Repository<nhanvien>,
    ) { }

    async findAll(): Promise<nhanvien[]> {
        return await this.nhanVienRepo.find();
    }

    async findOne(id: number): Promise<nhanvien> {
        return await this.nhanVienRepo.findOne(id)
    }

    async findUser(username: string): Promise<nhanvien> {
        return await this.nhanVienRepo.findOne({ username: username });
    }

    async sendEmail(email: string): Promise<any> {
        try {
            const output = `
            <p>mã xác minh tài khoản của bạn !</p>
            <ul>
                <li>${code}</li>
            </ul>
            `
            await nodemailer.createTestAccount();

            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: 'thanhdatmta99@gmail.com',
                    pass: 'thanhdat041199',
                },
            });

            let info = await transporter.sendMail({
                from: '"Hacker👻" <foo@example.com>',
                to: email,
                subject: "[dev] ✔",
                text: "Congratulations, you have successfully created an account",
                html: output,
            });
            return { statusCode: 200, message: "Gửi email thành công !" };

        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
    
    async create(dataNhanVien: nhanvien): Promise<any> {
        try {
            const check = await this.nhanVienRepo.findOne({ email: dataNhanVien.email })
            if (check) {
                return { statusCode: 404, message: "Tài khoản đã tồn tại trong hệ thống !" };
            }
            const newNhanVien = new nhanvien();
            newNhanVien.ten = dataNhanVien.ten;
            newNhanVien.email = dataNhanVien.email;
            newNhanVien.ngaysinh = dataNhanVien.ngaysinh;
            newNhanVien.vitri = dataNhanVien.vitri;
            newNhanVien.bangcap = dataNhanVien.bangcap;
            newNhanVien.luong = dataNhanVien.luong;
            newNhanVien.diachi = dataNhanVien.diachi;
            newNhanVien.sdt = dataNhanVien.sdt;
            newNhanVien.username = dataNhanVien.username;
            newNhanVien.password = dataNhanVien.password;
            newNhanVien.loginfirst = 0;
            newNhanVien.code = code;
            newNhanVien.checkcode = false

            await this.sendEmail(dataNhanVien.email);
            await this.nhanVienRepo.save(newNhanVien);

            return { statusCode: 200, message: "Thêm thành công. Mã code đã được gửi tới Email của bạn !"};
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async updateCheckCode(data: nhanvien): Promise<any>{
        try {
            let userCheck = new nhanvien()
            userCheck = await this.nhanVienRepo.findOne({code: data.code})
            if (!userCheck) {
                return { statusCode: 404, message: "Mã code không khớp !"};
            }
            await this.nhanVienRepo.query("UPDATE tttt.nhanvien SET checkcode = true, loginfirst = true WHERE id = " + userCheck.id)
            return { statusCode: 200, message: "Mã code chính xác !"};
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async update(data: nhanvien, id: number): Promise<any> {
        try {
            let nv = await this.nhanVienRepo.findOne({id: id})
            nv = data;
            // nv.bangcap = data.bangcap;
            // nv.luong = data.luong;
            // nv.vitri = data.vitri;
            await this.nhanVienRepo.update(id, nv);
            return { statusCode: 200, message: "Sửa thành công !"}
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async changePass(data: nhanvien): Promise<any> {
        try {
            let nv = await this.nhanVienRepo.findOne({username: data.username})
            nv = data;
            await this.nhanVienRepo.update(nv.id, nv);
            return { statusCode: 200, message: "Sửa thành công !"}
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async delete(id): Promise<any> {
        try {
            const check = await this.nhanVienRepo.findOne({ id: id })
            if (!check) return { statusCode: 404, message: "Người dùng không tồn tại trong hệ thống !" };
            await this.nhanVienRepo.delete(id);
            return { statusCode: 200, message: "Xóa thành công !" }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async search(key: nhanvien){
        try {
            const check = await this.nhanVienRepo.query("select * from tttt.nhanvien where ten LIKE '%"+ key.ten +"%'")
            if (!check) return { statusCode: 404, message: "Quản lý không tồn tại trong hệ thống !" };
            return { statusCode: 200, check }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
