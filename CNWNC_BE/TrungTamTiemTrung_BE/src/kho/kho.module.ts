import { Module } from '@nestjs/common';
import { KhoController } from './kho.controller'; 
import { KhoService } from './kho.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { kho } from './kho.entity'; 

@Module({
    imports: [
      TypeOrmModule.forFeature([kho])
    ],
    controllers: [KhoController],
    providers: [KhoService],
    exports:[KhoService]
  })
export class KhoModule {}
