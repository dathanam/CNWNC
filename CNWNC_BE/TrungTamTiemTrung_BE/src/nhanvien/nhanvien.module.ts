import { Module } from '@nestjs/common';
import { NhanVienController } from './nhanvien.controller';
import { NhanVienService } from './nhanvien.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { nhanvien } from './nhanvien.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([nhanvien])
  ],
  controllers: [NhanVienController],
  providers: [NhanVienService],
  exports:[NhanVienService]
})
export class UserModule {}
