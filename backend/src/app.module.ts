import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { EventTicketsModule } from './eventTickets/eventTickets.module';

@Module({
  imports: [EventTicketsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
