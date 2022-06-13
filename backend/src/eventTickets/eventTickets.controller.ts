import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Controller,
  UsePipes,
} from '@nestjs/common';
import { EventTickets } from './eventTickets.interface';
import { EventTicketsService } from './eventTickets.service';

@Controller('eventtickets')
export class EventTicketsController {
  constructor(private eventTicketsService: EventTicketsService) {}

  @Get()
  async getEventTickets(): Promise<EventTickets> {
    console.log('GET CONTROLLER');
    return await this.eventTicketsService.getDummyTickets();
  }
}
