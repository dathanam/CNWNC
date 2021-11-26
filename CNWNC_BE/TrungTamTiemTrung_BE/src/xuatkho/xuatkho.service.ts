import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { xuatkho } from './xuatkho.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class XuatkhoService {
    constructor(
        @InjectRepository(xuatkho)
        private readonly Repo: Repository<xuatkho>,
    ) { }

    async findAll(): Promise<xuatkho[]> {
        return await this.Repo.find();
    }

    async findOne(id: number): Promise<xuatkho> {
        return await this.Repo.findOne(id)
    }

    async create(dataPN: xuatkho): Promise<any> {
        try {
            const newPN = new xuatkho();
            newPN.ngay = dataPN.ngay;
            newPN.idnhanvien = dataPN.idnhanvien;
            newPN.idkho = dataPN.idkho;
            await this.Repo.save(newPN);
            return { statusCode: 200, message: "Thêm thành công!", newPN};
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async delete(id): Promise<any> {
        try {
            const check = await this.Repo.findOne({ id: id })
            if (!check) return { statusCode: 404, message: "Phiếu xuất không tồn tại trong hệ thống !" };
            await this.Repo.delete(id);
            return { statusCode: 200, message: "Xóa thành công !" }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async search(key: xuatkho){
        try {
            const check = await this.Repo.query("select * from tttt.xuatkho where id = "+ key.id)
            if (!check) return { statusCode: 404, message: "Phiếu xuất không tồn tại trong hệ thống !" };
            return { statusCode: 200, check }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
