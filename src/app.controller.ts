import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('code')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('run')
  RunCode(@Body() CodetoRun:any): any {
    return this.appService.PostCode(CodetoRun);
  }

  @Post('submit')
  submitCode(@Body() codetoSubmit:any): any {
    return this.appService.submitCode(codetoSubmit);
  }
}
