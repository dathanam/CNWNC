import { Module } from '@nestjs/common';
import { UserModule } from './nhanvien/nhanvien.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VacxinModule } from './vacxin/vacxin.module';
import { PhieunhapModule } from './phieunhap/phieunhap.module';
import { NhacungcapModule } from './nhacungcap/nhacungcap.module';
import { ChitietphieunhapModule } from './chitietphieunhap/chitietphieunhap.module';
import { PhieuxuatModule } from './phieuxuat/phieuxuat.module';
import { ChitietphieuxuatModule } from './chitietphieuxuat/chitietphieuxuat.module';
import { TrungtamModule } from './trungtam/trungtam.module';
import { KhoModule } from './kho/kho.module';
import { ChitietkhoModule } from './chitietkho/chitietkho.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'thanhdat04111999',
      database: 'tttt',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    VacxinModule,
    PhieunhapModule,
    NhacungcapModule,
    ChitietphieunhapModule,
    PhieuxuatModule,
    ChitietphieuxuatModule,
    TrungtamModule,
    KhoModule,
    ChitietkhoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
