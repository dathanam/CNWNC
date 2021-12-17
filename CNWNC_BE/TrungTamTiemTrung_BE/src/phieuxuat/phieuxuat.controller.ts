import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, Logger } from '@nestjs/common';
import { PhieuxuatService } from './phieuxuat.service'; 
import { phieuxuat } from './phieuxuat.entity'; 
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../role/roles.guard';
import { Roles } from 'src/role/roles.decorators';
import { Role } from 'src/role/role.enum';

@Controller('phieuxuat')
export class PhieuxuatController {
    logger: Logger;
    constructor(private readonly service: PhieuxuatService) {
      this.logger = new Logger(PhieuxuatController.name)
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.PREMIUM)
    @Get()
    findAll(): Promise<phieuxuat[]> {
      return this.service.findAll()
    }
  
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.PREMIUM)
    @Get(':id')
    get(@Param() params) {
      return this.service.findOne(params.id);
    }
  
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.PREMIUM)
    @Post()
    create(@Body() body) {
      this.logger.log(`create`)
      return this.service.create(body);
    }
 
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.PREMIUM)
    @Delete(':id')
    deleteUser(@Param() params) {
      this.logger.log(`delete: ${params.id}`)
      return this.service.delete(params.id);
    }

    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles(Role.PREMIUM)
    @Post('search')
    search(@Body() body) {
      return this.service.search(body);
    }
}
