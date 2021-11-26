import { Module } from '@nestjs/common';
import { ChitietphieunhapController } from './chitietphieunhap.controller';
import { VacxinModule } from 'src/vacxin/vacxin.module'; 
import { ChitietphieunhapService } from './chitietphieunhap.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { chitietphieunhap } from './chitietphieunhap.entity';
import { VacxinService } from 'src/vacxin/vacxin.service';
import { VacxinController } from 'src/vacxin/vacxin.controller';


@Module({
    imports: [
      TypeOrmModule.forFeature([chitietphieunhap]),VacxinModule
    ],
    controllers: [ChitietphieunhapController],
    providers: [ChitietphieunhapService],
    exports:[ChitietphieunhapService]
  })
export class ChitietphieunhapModule {}
