import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { KhoService } from './kho.service'; 
import { kho } from './kho.entity'; 
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../role/roles.guard';
import { Roles } from 'src/role/roles.decorators';
import { Role } from 'src/role/role.enum';

@Controller('kho')
export class KhoController {
    constructor(private readonly service: KhoService) {}

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.USER, Role.ADMIN, Role.PREMIUM)
    @Get()
    findAll(): Promise<kho[]> {
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
    @Roles(Role.PREMIUM)
    @Delete(':id')
    deleteUser(@Param() params) {
      return this.service.delete(params.id);
    }
}
