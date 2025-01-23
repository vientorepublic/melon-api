import { MainService } from '../service/main.service';
import { Controller, Get } from '@nestjs/common';
import type { IMessage } from 'src/types';

@Controller()
export class MainController {
  constructor(private readonly mainService: MainService) {}

  @Get()
  public greetings(): IMessage {
    return this.mainService.greetings();
  }
}
