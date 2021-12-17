import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ChitietkhoService } from './chitietkho.service'; 
import { chitietkho } from './chitietkho.entity'; 
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../role/roles.guard';
import { Roles } from 'src/role/roles.decorators';
import { Role } from 'src/role/role.enum';

@Controller('chitietkho')
export class ChitietkhoController {
    constructor(private readonly service: ChitietkhoService) {}

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.PREMIUM)
    @Get(':idtrungtam')
    findAll(@Param() params): Promise<chitietkho[]> {
      return this.service.findAll(params)
    }
  
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN, Role.PREMIUM)
    @Post()
    create(@Body() body) {
      return this.service.create(body);
    }
  
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.ADMIN)
    @Delete(':id')
    deleteUser(@Param() params) {
      return this.service.delete(params.id);
    }
}
