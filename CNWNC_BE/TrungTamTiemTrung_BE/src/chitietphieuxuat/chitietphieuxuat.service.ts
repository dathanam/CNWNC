import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { chitietphieuxuat } from './chitietphieuxuat.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChitietphieuxuatService {
    constructor(
        @InjectRepository(chitietphieuxuat)
        private readonly Repo: Repository<chitietphieuxuat>,
    ) { }

    async findAll(): Promise<chitietphieuxuat[]> {
        return await this.Repo.find();
    }

    async findOne(id: number): Promise<chitietphieuxuat> {
        return await this.Repo.findOne(id)
    }

    async create(dataCTPN: chitietphieuxuat): Promise<any> {
        try {
            const newCTPN= new chitietphieuxuat();
            newCTPN.soluong = dataCTPN.soluong;
            newCTPN.thanhtien = dataCTPN.thanhtien;
            newCTPN.idphieuxuat = dataCTPN.idphieuxuat;
            newCTPN.idvacxin = dataCTPN.idvacxin;

            await this.Repo.save(newCTPN);
            return { statusCode: 200, message: "Thêm thành công!", newCTPN};
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async delete(id): Promise<any> {
        try {
            const check = await this.Repo.findOne({ id: id })
            if (!check) return { statusCode: 404, message: "không tồn tại trong hệ thống !" };
            await this.Repo.delete(id);
            return { statusCode: 200, message: "Xóa thành công !" }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
