import { Injectable } from '@nestjs/common';
import { EventTickets } from './eventTickets.interface';
import { dummyData } from './data/data';

@Injectable()
export class EventTicketsService {
  async getDummyTickets(): Promise<EventTickets> {
    const eventTickets = process.env.DATABASE_URL
      ? (await fetch('process.env.DATABASE_URL')).json()
      : dummyData;

    console.log(eventTickets);
    return eventTickets;
  }
}
