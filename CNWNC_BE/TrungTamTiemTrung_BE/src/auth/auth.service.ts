import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NhanVienService } from 'src/nhanvien/nhanvien.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { nhanvien } from 'src/nhanvien/nhanvien.entity';

var crypto = require('crypto-js');

@Injectable()
export class AuthService {
    constructor(
        private readonly nhanvienService: NhanVienService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.nhanvienService.findUser(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;

            return result;
        }
        return null;
    }


    async login(dataUser: nhanvien) {
        try {
            console.log(dataUser)
            const userFind = await this.nhanvienService.findUser(dataUser.username);
            if (!userFind) {
                return { statusCode: 404, message: "Không tìm thấy tài khoản" }
            } else {
                var bytes = crypto.AES.decrypt(userFind.password, '123');
                var password_decode = bytes.toString(crypto.enc.Utf8);
                if (password_decode === dataUser.password) {
                    const payload = { username: userFind.username, email: userFind.email, role: userFind.quyen, loginFrist: userFind.loginfirst, idNV: userFind.id, idTrungTam: userFind.idtrungtam }
                    return {
                        accessToken: this.jwtService.sign(payload, { expiresIn: 60 * 60 }),
                        expiresIn: 60 * 60
                    }
                } else {
                    return { statusCode: 404, message: "Sai thông tin đăng nhập" }
                }
            }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
