import { IsNotEmpty, IsDate, ValidateNested, Validate } from 'class-validator';

export class EventTicketsDTO {
  @IsNotEmpty()
  readonly eventTitle: string;
  @IsNotEmpty()
  @IsDate()
  readonly eventDate: Date;
  @IsNotEmpty()
  readonly eventCity: string;
  @ValidateNested({ each: true })
  @IsNotEmpty()
  readonly tickets: ITickets[];
}

// export interface ITickets{
//   readonly barcode: string;
//   readonly firstName: string;
//   readonly lastName: string;
// }

export interface ITickets {
  barcode: string;
  firstName: string;
  lastName: string;
}
