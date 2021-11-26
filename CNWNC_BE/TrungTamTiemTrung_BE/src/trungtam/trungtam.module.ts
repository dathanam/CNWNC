import { Module } from '@nestjs/common';
import { TrungtamController } from './trungtam.controller'; 
import { TrungtamService } from './trungtam.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { trungtam } from './trungtam.entity'; 

@Module({
    imports: [
      TypeOrmModule.forFeature([trungtam])
    ],
    controllers: [TrungtamController],
    providers: [TrungtamService],
    exports:[TrungtamService]
  })
export class TrungtamModule {}
