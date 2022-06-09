export interface Tickets {
  barcode: string;
  firstName: string;
  lastname: string;
}

export interface Event {
  eventTitle: string;
  eventDate: Date;
  eventCity: string;
  tickets: Tickets[];
}
