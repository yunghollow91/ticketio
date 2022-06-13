import { ITickets, EventTicketsDTO } from '../dto/eventTickets.dto';

const eventDate = new Date('July 18, 1975 23:15:30');

export const dummyData = [
  createDefaultEvent('Money Boy', eventDate, 'Köln', [
    createDefaultTickets('53848834', 'Yung', 'Hollow'),
  ]),
  createDefaultEvent('Some Other Event', eventDate, 'Köln', [
    createDefaultTickets('63452594', 'Der', 'Krankmann'),
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
