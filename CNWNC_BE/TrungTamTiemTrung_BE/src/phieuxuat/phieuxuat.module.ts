import { Module } from '@nestjs/common';
import { PhieuxuatController } from './phieuxuat.controller';
import { PhieuxuatService } from './phieuxuat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { phieuxuat } from './phieuxuat.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([phieuxuat])
  ],
  controllers: [PhieuxuatController],
  providers: [PhieuxuatService],
  exports:[PhieuxuatService]
})
export class PhieuxuatModule {}
