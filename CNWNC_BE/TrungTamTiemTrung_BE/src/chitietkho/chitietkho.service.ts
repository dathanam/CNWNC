import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { chitietkho } from './chitietkho.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ChitietkhoService {
    constructor(
        @InjectRepository(chitietkho)
        private readonly Repo: Repository<chitietkho>,
    ) { }

    async findAll(data): Promise<any> {
        if (data.idtrungtam == 1) {
            return await this.Repo.query("select * from tttt.chitietkho");
        } else {
            return await this.Repo.query("select * from tttt.chitietkho where idtrungtam = " + data.idtrungtam);
        }
    }

    async findOne(id: number): Promise<chitietkho> {
        return await this.Repo.findOne(id)
    }

    async create(data: chitietkho): Promise<any> {
        try {
            const check = await this.Repo.findOne({ idvacxin: data.idvacxin })
            // if (check) {
            //     check.soluong = data.soluong
            //     await this.Repo.update(check.id, check);
            // }
            const dataNew = new chitietkho();
            dataNew.idvacxin = data.idvacxin;
            dataNew.idtrungtam = data.idtrungtam;
            dataNew.soluong = data.soluong;

            await this.Repo.save(dataNew);
            return { statusCode: 200, message: "Thêm thành công!", dataNew };
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
