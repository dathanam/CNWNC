import { Module } from '@nestjs/common';
import { ChitietphieuxuatController } from './chitietphieuxuat.controller'; 
import { ChitietphieuxuatService } from './chitietphieuxuat.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { chitietphieuxuat } from './chitietphieuxuat.entity'; 

@Module({
    imports: [
      TypeOrmModule.forFeature([chitietphieuxuat])
    ],
    controllers: [ChitietphieuxuatController],
    providers: [ChitietphieuxuatService],
    exports:[ChitietphieuxuatService]
  })
export class ChitietphieuxuatModule {}
