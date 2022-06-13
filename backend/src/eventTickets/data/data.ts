import { ITickets, EventTicketsDTO } from '../dto/eventTickets.dto';

const eventDate = new Date('July 18, 1975 23:15:30');

export const dummyData = [
  createDefaultEvent('Money Boy', eventDate, 'Köln', [
    createDefaultTickets('234', '344', '3434'),
  ]),
];

function createDefaultTickets(
  barcode: string,
  firstName: string,
  lastName: string,
) {
  return { barcode, firstName, lastName };
}

function createDefaultEvent(
  eventTitle: string,
  eventDate: Date,
  eventCity: string,
  tickets: ITickets[],
) {
  return { eventTitle, eventDate, eventCity, tickets };
}
