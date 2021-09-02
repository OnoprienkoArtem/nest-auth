import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResetEntity } from './models/reset.entity';
import { ResetService } from './reset.service';
import { ResetController } from './reset.controller';

@Module({
  providers: [ResetService],
  controllers: [ResetController],
  imports: [TypeOrmModule.forFeature([ResetEntity])],
})
export class ResetModule {}
