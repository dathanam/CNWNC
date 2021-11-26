import { Module } from '@nestjs/common';
import { ChitietxuatkhoController } from './chitietxuatkho.controller';
import { ChitietxuatkhoService } from './chitietxuatkho.service'; 
import { TypeOrmModule } from '@nestjs/typeorm';
import { chitietxuatkho } from './chitietxuatkho.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([chitietxuatkho])
    ],
    controllers: [ChitietxuatkhoController],
    providers: [ChitietxuatkhoService],
    exports:[ChitietxuatkhoService]
  })
export class ChitietxuatkhoModule {}
