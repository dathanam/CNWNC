import { Module } from '@nestjs/common';
import { UserModule } from './nhanvien/nhanvien.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { VacxinModule } from './vacxin/vacxin.module';
import { PhieunhapModule } from './phieunhap/phieunhap.module';
import { NhacungcapModule } from './nhacungcap/nhacungcap.module';
import { PhieunhapController } from './phieunhap/phieunhap.controller';
import { ChitietphieunhapController } from './chitietphieunhap/chitietphieunhap.controller';
import { ChitietphieunhapModule } from './chitietphieunhap/chitietphieunhap.module';
import { PhieuxuatController } from './phieuxuat/phieuxuat.controller';
import { PhieuxuatModule } from './phieuxuat/phieuxuat.module';
import { ChitietphieuxuatController } from './chitietphieuxuat/chitietphieuxuat.controller';
import { ChitietphieuxuatModule } from './chitietphieuxuat/chitietphieuxuat.module';
import { TrungtamController } from './trungtam/trungtam.controller';
import { TrungtamModule } from './trungtam/trungtam.module';
import { KhoModule } from './kho/kho.module';
import { ChitietkhoController } from './chitietkho/chitietkho.controller';
import { ChitietkhoService } from './chitietkho/chitietkho.service';
import { ChitietkhoModule } from './chitietkho/chitietkho.module';
import { XuatkhoController } from './xuatkho/xuatkho.controller';
import { XuatkhoModule } from './xuatkho/xuatkho.module';
import { ChitietxuatkhoController } from './chitietxuatkho/chitietxuatkho.controller';
import { ChitietxuatkhoModule } from './chitietxuatkho/chitietxuatkho.module';

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
    ChitietkhoModule,
    XuatkhoModule,
    ChitietxuatkhoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
