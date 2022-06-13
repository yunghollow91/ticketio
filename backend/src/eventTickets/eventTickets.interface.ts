export interface ITickets {
  barcode: string;
  firstName: string;
  lastName: string;
}

export interface EventTickets {
  eventTitle: string;
  eventDate: Date;
  eventCity: string;
  tickets: ITickets[];
}
