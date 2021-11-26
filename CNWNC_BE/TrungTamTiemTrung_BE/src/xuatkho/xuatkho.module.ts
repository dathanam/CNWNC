import { Module } from '@nestjs/common';
import { XuatkhoController } from './xuatkho.controller';
import { XuatkhoService } from './xuatkho.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { xuatkho } from './xuatkho.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([xuatkho])
  ],
  controllers: [XuatkhoController],
  providers: [XuatkhoService],
  exports:[XuatkhoService]
})
export class XuatkhoModule {}
