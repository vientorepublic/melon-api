import { Injectable } from '@nestjs/common';
import { IMessage } from 'src/types';

@Injectable()
export class MainService {
  public greetings(): IMessage {
    return {
      message: 'Hello World!',
    };
  }
}
