import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { nhacungcap } from './nhacungcap.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NhacungcapService {
    constructor(
        @InjectRepository(nhacungcap)
        private readonly NCCRepo: Repository<nhacungcap>,
    ) { }

    async findAll(): Promise<nhacungcap[]> {
        return await this.NCCRepo.find();
    }

    async findOne(id: number): Promise<nhacungcap> {
        return await this.NCCRepo.findOne(id)
    }

    async create(dataVacxin: nhacungcap): Promise<any> {
        try {
            const check = await this.NCCRepo.findOne({ ten: dataVacxin.ten })
            if (check) {
                return { statusCode: 404, message: "nha cung cap đã tồn tại trong hệ thống !" };
            }
            const newnhacungcap= new nhacungcap();
            newnhacungcap.ten = dataVacxin.ten;
            newnhacungcap.diachi = dataVacxin.diachi;

            await this.NCCRepo.save(newnhacungcap);
            return { statusCode: 200, message: "Thêm thành công!", newnhacungcap};
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async update(data: nhacungcap, id: number): Promise<any> {
        try {
            let nv = await this.NCCRepo.findOne({id: id})
            nv = data;
            await this.NCCRepo.update(id, nv);
            return { statusCode: 200, message: "Sửa thành công !"}
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async delete(id): Promise<any> {
        try {
            const check = await this.NCCRepo.findOne({ id: id })
            if (!check) return { statusCode: 404, message: "nhà cung cấp không tồn tại trong hệ thống !" };
            await this.NCCRepo.delete(id);
            return { statusCode: 200, message: "Xóa thành công !" }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async search(key: nhacungcap){
        try {
            const check = await this.NCCRepo.query("select * from tttt.nhacungcap where ten LIKE '%"+ key.ten +"%'")
            if (!check) return { statusCode: 404, message: "Vacxin không tồn tại trong hệ thống !" };
            return { statusCode: 200, check }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
