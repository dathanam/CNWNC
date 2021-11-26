import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { kho } from './kho.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class KhoService {
    constructor(
        @InjectRepository(kho)
        private readonly Repo: Repository<kho>,
    ) { }

    async findAll(): Promise<kho[]> {
        return await this.Repo.find();
    }

    async findOne(id: number): Promise<kho> {
        return await this.Repo.findOne(id)
    }

    async create(data: kho): Promise<any> {
        try {
            const check = await this.Repo.findOne({ ten: data.ten })
            if (check) {
                return { statusCode: 404, message: "kho đã tồn tại trong hệ thống !" };
            }
            const dataNew= new kho();
            dataNew.ten = data.ten;
            dataNew.idtrungtam = data.idtrungtam;

            await this.Repo.save(dataNew);
            return { statusCode: 200, message: "Thêm thành công!", dataNew};
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
