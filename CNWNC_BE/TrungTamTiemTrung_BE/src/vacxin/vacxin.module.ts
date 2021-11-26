import { Module } from '@nestjs/common';
import { VacxinController } from './vacxin.controller';
import { VacxinService} from './vacxin.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import { vacxin } from './vacxin.entity';

@Module({
    imports: [
      TypeOrmModule.forFeature([vacxin])
    ],
    controllers: [VacxinController],
    providers: [VacxinService],
    exports:[VacxinService]
  })
export class VacxinModule {}
