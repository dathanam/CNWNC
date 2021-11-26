import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { vacxin } from './vacxin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VacxinService {
    constructor(
        @InjectRepository(vacxin)
        private readonly vacxinRepo: Repository<vacxin>,
    ) { }

    async findAll(): Promise<vacxin[]> {
        return await this.vacxinRepo.find();
    }

    async findOne(id: number): Promise<vacxin> {
        return await this.vacxinRepo.findOne(id)
    }

    async create(dataVacxin: vacxin): Promise<any> {
        try {
            const check = await this.vacxinRepo.findOne({ ten: dataVacxin.ten })
            if (check) {
                return { statusCode: 404, message: "Vacxin đã tồn tại trong hệ thống !" };
            }
            const newVacxin= new vacxin();
            newVacxin.ten = dataVacxin.ten;
            newVacxin.soluong = dataVacxin.soluong;
            newVacxin.dongia = dataVacxin.dongia;
            newVacxin.ngaysanxuat = dataVacxin.ngaysanxuat;
            newVacxin.hansudung = dataVacxin.hansudung;
            newVacxin.doituongsudung = dataVacxin.doituongsudung;
            newVacxin.solo = dataVacxin.solo;
            newVacxin.baoquan = dataVacxin.baoquan;

            await this.vacxinRepo.save(newVacxin);
            return { statusCode: 200, message: "Thêm thành công!", newVacxin};
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async update(data: vacxin, id: number): Promise<any> {
        try {
            const vx = await this.vacxinRepo.findOne({id: id})
            if(!vx) return { statusCode: 404, message: "vacxin không tồn tại trong hệ thống !" };
            vx.soluong = data.soluong;
            vx.dongia = data.dongia;
            await this.vacxinRepo.update(id, vx);
            return { statusCode: 200, message: "Sửa thành công !"}
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async delete(id): Promise<any> {
        try {
            const check = await this.vacxinRepo.findOne({ id: id })
            if (!check) return { statusCode: 404, message: "Vacxin không tồn tại trong hệ thống !" };
            await this.vacxinRepo.delete(id);
            return { statusCode: 200, message: "Xóa thành công !" }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }

    async search(key: vacxin){
        try {
            const check = await this.vacxinRepo.query("select * from tttt.vacxin where ten LIKE '%"+ key.ten +"%'")
            if (!check) return { statusCode: 404, message: "Vacxin không tồn tại trong hệ thống !" };
            return { statusCode: 200, check }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST)
        }
    }
}
