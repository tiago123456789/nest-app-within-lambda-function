import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: '',
        port: '',
        auth: {
          user: '',
          pass: '',
        },
      },
    }),
  ],
  controllers: [NotificationController],
  providers: [],
})
export class NotificationModule {}
