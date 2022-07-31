import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private users: { [key: string]: any }[] = [
    {
      name: 'test',
      email: 'test@gmail.com',
    },
  ];

  @Get()
  @HttpCode(200)
  getUsers(): { [key: string]: any }[] {
    return this.users;
  }

  @Post()
  @HttpCode(201)
  create(@Body() user: { [key: string]: any }) {
    this.users.push(user);
    console.log(this.users);
  }
}
