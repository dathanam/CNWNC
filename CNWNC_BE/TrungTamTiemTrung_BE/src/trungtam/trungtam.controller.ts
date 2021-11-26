import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { TrungtamService } from './trungtam.service'; 
import { trungtam } from './trungtam.entity'; 
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../role/roles.guard';
import { Roles } from 'src/role/roles.decorators';
import { Role } from 'src/role/role.enum';

@Controller('trungtam')
export class TrungtamController {
    constructor(private readonly service: TrungtamService) {}

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.USER, Role.ADMIN, Role.PREMIUM)
    @Get()
    findAll(): Promise<trungtam[]> {
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
      return this.service.create(body);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.PREMIUM)
    @Put()
    update(@Body() data,  @Param() params) {
      return this.service.update(data, params);
    }
  
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.PREMIUM)
    @Delete(':id')
    deleteUser(@Param() params) {
      return this.service.delete(params.id);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.USER, Role.ADMIN, Role.PREMIUM)
    @Post('search')
    search(@Body() body) {
      return this.service.search(body);
    }
}
