import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('data')
  getData() {
    return [
      { id: 1, name: 'Item from NestJS' },
      { id: 2, name: 'Turbo Power' },
    ];
  }
}
