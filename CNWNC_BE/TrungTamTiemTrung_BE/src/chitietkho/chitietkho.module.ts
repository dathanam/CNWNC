import { Module } from '@nestjs/common';
import { ChitietkhoController } from './chitietkho.controller'; 
import { ChitietkhoService } from './chitietkho.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { chitietkho } from './chitietkho.entity'; 

@Module({
    imports: [
      TypeOrmModule.forFeature([chitietkho])
    ],
    controllers: [ChitietkhoController],
    providers: [ChitietkhoService],
    exports:[ChitietkhoService]
  })
export class ChitietkhoModule {}
