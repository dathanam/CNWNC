import { Module } from '@nestjs/common';
import { NhacungcapController } from './nhacungcap.controller';
import { NhacungcapService } from './nhacungcap.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { nhacungcap } from './nhacungcap.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([nhacungcap])
  ],
  controllers: [NhacungcapController],
  providers: [NhacungcapService],
  exports:[NhacungcapService]
})
export class NhacungcapModule {}
