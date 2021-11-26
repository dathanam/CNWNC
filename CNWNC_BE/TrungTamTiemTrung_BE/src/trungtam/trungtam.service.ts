import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { trungtam } from './trungtam.entity'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TrungtamService {
    constructor(
        @InjectRepository(trungtam)
        private readonly Repo: Repository<trungtam>,
    ) { }

    async findAll(): Promise<trungtam[]> {
        return await this.Repo.find();
    }

    async findOne(id: number): Promise<trungtam> {
        return await this.Repo.findOne(id)
    }

    async create(data: trungtam): Promise<any> {
        try {
            const check = await this.Repo.findOne({ ten: data.ten })
            if (check) {
                return { statusCode: 404, message: "trung tâm đã tồn tại trong hệ thống !" };
            }
            const dataNew= new trungtam();
            dataNew.ten = data.ten;
            dataNew.duongdaynong = data.duongdaynong;
            dataNew.diachi = data.diachi;

            await this.Repo.save(dataNew);
            return { statusCode: 200, message: "Thêm thành công!", dataNew};
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async update(data: trungtam, id: number): Promise<any> {
        try {
            const vx = await this.Repo.findOne({id: id})
            if(!vx) return { statusCode: 404, message: "không tồn tại trong hệ thống !" };
            vx.duongdaynong = data.duongdaynong;
            vx.diachi = data.diachi;
            await this.Repo.update(id, vx);
            return { statusCode: 200, message: "Sửa thành công !"}
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

    async search(key: trungtam){
        try {
            const check = await this.Repo.query("select * from tttt.trungtam where ten LIKE '%"+ key.ten +"%'")
            if (!check) return { statusCode: 404, message: "Vacxin không tồn tại trong hệ thống !" };
            return { statusCode: 200, check }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
