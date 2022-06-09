import { Injectable } from '@nestjs/common';
import { Event } from './dto/eventTickets';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getEventInfo(): Event {
    return;
  }
}
