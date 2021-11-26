import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { phieunhap } from './phieunhap.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChitietphieunhapService } from 'src/chitietphieunhap/chitietphieunhap.service';
import { ID } from '@nestjs/graphql';

@Injectable()
export class PhieunhapService {
    constructor(
        @InjectRepository(phieunhap)
        private readonly PNRepo: Repository<phieunhap>,
        private CTPhieuNhapRepo : ChitietphieunhapService
    ) { }

    async findAll(): Promise<phieunhap[]> {
        return await this.PNRepo.find();
    }

    async findOne(id: number): Promise<phieunhap> {
        return await this.PNRepo.findOne(id)
    }

    async create(dataPN: phieunhap): Promise<any> {
        try {
            const newPN = new phieunhap();
            newPN.ngay = dataPN.ngay;
            newPN.idnhanvien = dataPN.idnhanvien;
            newPN.idnhacungcap = dataPN.idnhacungcap;
            newPN.tongtien = 0;
            newPN.trangthai = false;
            await this.PNRepo.save(newPN);
            return { statusCode: 200, message: "Thêm thành công!", newPN};
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async delete(id): Promise<any> {
        try {
            const check = await this.PNRepo.findOne({ id: id })
            if (!check) return { statusCode: 404, message: "Phiếu nhập không tồn tại trong hệ thống !" };
            await this.PNRepo.delete(id);
            return { statusCode: 200, message: "Xóa thành công !" }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async update(id){
        try {
            const ListDetail = await this.CTPhieuNhapRepo.findDetail(id.id);
            let Tong = 0;
            for(var i in ListDetail){
                Tong = Tong+parseInt(ListDetail[i].thanhtien)
            }
            let nv = await this.PNRepo.findOne({id: id})
            nv.tongtien = Tong;
            nv.trangthai = true;
            await this.PNRepo.update(id.id, nv);
            return { statusCode: 200, message: "Sửa thành công !"}
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }


    async search(key: phieunhap){
        try {
            const check = await this.PNRepo.query("select * from tttt.phieunhap where id = "+ key.id)
            if (!check) return { statusCode: 404, message: "Phiếu nhập không tồn tại trong hệ thống !" };
            return { statusCode: 200, check }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
