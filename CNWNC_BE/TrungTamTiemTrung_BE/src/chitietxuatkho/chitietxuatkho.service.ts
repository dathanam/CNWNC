import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { chitietxuatkho } from './chitietxuatkho.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChitietxuatkhoService {
    constructor(
        @InjectRepository(chitietxuatkho)
        private readonly Repo: Repository<chitietxuatkho>,
    ) { }

    async findAll(): Promise<chitietxuatkho[]> {
        return await this.Repo.find();
    }

    async findOne(id: number): Promise<chitietxuatkho> {
        return await this.Repo.findOne(id)
    }

    async create(dataCTPN: chitietxuatkho): Promise<any> {
        try {
            const newCTPN= new chitietxuatkho();
            newCTPN.soluong = dataCTPN.soluong;
            newCTPN.idchitietkho = dataCTPN.idchitietkho;
            newCTPN.idxuatkho = dataCTPN.idxuatkho;

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
