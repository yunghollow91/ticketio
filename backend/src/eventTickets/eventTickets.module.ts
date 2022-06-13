import { Module } from '@nestjs/common';
import { EventTicketsController } from './eventTickets.controller';
import { EventTicketsService } from './eventTickets.service';

@Module({
  imports: [],
  providers: [EventTicketsService],
  controllers: [EventTicketsController],
  exports: [EventTicketsService],
})
export class EventTicketsModule {}
