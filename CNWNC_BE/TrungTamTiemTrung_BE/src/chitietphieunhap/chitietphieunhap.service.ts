import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { chitietphieunhap } from './chitietphieunhap.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VacxinService } from 'src/vacxin/vacxin.service';

@Injectable()
export class ChitietphieunhapService {
    constructor(
        @InjectRepository(chitietphieunhap)
        private readonly CTPNRepo: Repository<chitietphieunhap>,
        private vacxinRepo: VacxinService,
    ) { }

    async findAll(): Promise<chitietphieunhap[]> {
        return await this.CTPNRepo.find();
    }

    async findOne(id: number): Promise<chitietphieunhap> {
        return await this.CTPNRepo.findOne(id)
    }

    async findDetail(id: number): Promise<chitietphieunhap[]> {
        return await this.CTPNRepo.find({idphieunhap: id});
    }

    async create(dataCTPN: chitietphieunhap): Promise<any> {
        try {
            const check = await this.vacxinRepo.findOne(dataCTPN.idvacxin)
            const newCTPN= new chitietphieunhap();
            newCTPN.soluong = dataCTPN.soluong;
            newCTPN.thanhtien = check.dongia * dataCTPN.soluong
            newCTPN.idphieunhap = dataCTPN.idphieunhap;
            newCTPN.idvacxin = dataCTPN.idvacxin;

            await this.CTPNRepo.save(newCTPN);
            return { statusCode: 200, message: "Thêm thành công!", newCTPN};
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async delete(id): Promise<any> {
        try {
            const check = await this.CTPNRepo.findOne({ id: id })
            if (!check) return { statusCode: 404, message: "không tồn tại trong hệ thống !" };
            await this.CTPNRepo.delete(id);
            return { statusCode: 200, message: "Xóa thành công !" }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
