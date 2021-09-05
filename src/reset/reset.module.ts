import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ResetEntity } from './models/reset.entity';
import { ResetService } from './reset.service';
import { ResetController } from './reset.controller';

@Module({
  providers: [ResetService],
  controllers: [ResetController],
  imports: [
    TypeOrmModule.forFeature([ResetEntity]),
    MailerModule.forRoot({
      transport: {
        host: 'localhost',
        port: 1025,
      },
      defaults: {
        from: 'no-replay@localhost.com',
      },
    }),
    AuthModule,
  ],
})
export class ResetModule {}
