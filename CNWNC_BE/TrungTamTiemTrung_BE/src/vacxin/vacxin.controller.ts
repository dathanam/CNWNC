import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Logger } from '@nestjs/common';
import { VacxinService } from './vacxin.service';
import { vacxin } from './vacxin.entity';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../role/roles.guard';
import { Roles } from 'src/role/roles.decorators';
import { Role } from 'src/role/role.enum';

@Controller('vacxin')
export class VacxinController {
  logger: Logger
    constructor(private readonly service: VacxinService) {
      this.logger = new Logger(VacxinController.name)
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.USER, Role.ADMIN, Role.PREMIUM)
    @Get()
    findAll(): Promise<vacxin[]> {
      return this.service.findAll()
    }
  
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.USER, Role.ADMIN, Role.PREMIUM)
    @Get(':id')
    get(@Param() params) {
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
    updateSoLuong(@Param() params, @Body() data) {
      return this.service.updateSoLuong(params, data.soluong);
    }
  
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.PREMIUM)
    @Delete(':id')
    deleteUser(@Param() params) {
      this.logger.log(`delete: ${params.id}`)
      return this.service.delete(params.id);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.USER, Role.ADMIN, Role.PREMIUM)
    @Post('search')
    search(@Body() body) {
      return this.service.search(body);
    }
}
