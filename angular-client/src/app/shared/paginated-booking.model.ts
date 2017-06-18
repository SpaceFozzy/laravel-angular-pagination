import { Booking } from './booking.model'

export class PaginatedBooking {
  current_page: number;
  data: Booking[];
  from: number;
  last_page: number;
  next_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: number;
  to: number;
  total: number;
}