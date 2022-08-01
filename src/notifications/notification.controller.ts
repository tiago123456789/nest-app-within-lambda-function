import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';

@Controller('/notifications')
export class NotificationController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('/welcome')
  @HttpCode(200)
  async welcome(@Body() data: any): Promise<any> {
    return this.mailerService.sendMail({
      to: data.email,
      from: 'noreply@nestjs.com',
      subject: 'Welcome',
      text: 'Welcome ',
    });
  }
}
