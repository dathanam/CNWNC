import { Module } from '@nestjs/common';
import { PhieunhapController } from './phieunhap.controller';
import { PhieunhapService } from './phieunhap.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { phieunhap } from './phieunhap.entity';
import { ChitietphieunhapModule } from 'src/chitietphieunhap/chitietphieunhap.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([phieunhap]), ChitietphieunhapModule
  ],
  controllers: [PhieunhapController],
  providers: [PhieunhapService],
  exports:[PhieunhapService]
})
export class PhieunhapModule {}
