import { Module } from '@nestjs/common';
import { PhieuxuatController } from './phieuxuat.controller';
import { PhieuxuatService } from './phieuxuat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { phieuxuat } from './phieuxuat.entity';
import { ChitietphieuxuatModule } from 'src/chitietphieuxuat/chitietphieuxuat.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([phieuxuat]), ChitietphieuxuatModule
  ],
  controllers: [PhieuxuatController],
  providers: [PhieuxuatService],
  exports:[PhieuxuatService]
})
export class PhieuxuatModule {}
