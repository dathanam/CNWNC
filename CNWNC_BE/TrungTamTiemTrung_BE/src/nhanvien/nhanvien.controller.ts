import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Logger } from '@nestjs/common';
import { NhanVienService } from './nhanvien.service'
import {nhanvien} from './nhanvien.entity';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../role/roles.guard';
import { Roles } from 'src/role/roles.decorators';
import { Role } from 'src/role/role.enum';

@Controller('nhanvien')
export class NhanVienController {
    logger: Logger;
    constructor(private readonly service: NhanVienService) {
      this.logger = new Logger(NhanVienController.name)
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.USER, Role.ADMIN, Role.PREMIUM)
    @Get()
    findAll(): Promise<nhanvien[]> {
    //  this.logger.log('findAll')
      return this.service.findAll()
    }
  
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.USER, Role.ADMIN, Role.PREMIUM)
    @Get(':id')
    get(@Param() params) {
    //  this.logger.log(`get : ${params}`)
      return this.service.findOne(params.id);
    }
  
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.PREMIUM)
    @Post()
    create(@Body() body) {
      this.logger.log(`create`)
      return this.service.create(body);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.PREMIUM)
    @Put(':id')
    update(@Body() data,  @Param() params) {
      this.logger.log(`update: ${params.id}`)
      return this.service.update(data, params);
    }
  
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.PREMIUM)
    @Delete(':id')
    deleteUser(@Param() params) {
      this.logger.log(`delete : ${params}`)
      return this.service.delete(params.id);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.USER, Role.ADMIN, Role.PREMIUM)
    @Post('search')
    search(@Body() body) {
      return this.service.search(body);
    }
}
