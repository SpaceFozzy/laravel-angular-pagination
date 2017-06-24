import { Component, OnInit } from '@angular/core';
import { BasicPaginationService } from './basic-pagination.service' 

import { PaginatedBooking } from '../shared/paginated-booking.model'

@Component({
  selector: 'basic',
  templateUrl: './basic-pagination.component.html',
  styleUrls: ['./basic-pagination.component.css']
})
export class BasicPaginationComponent implements OnInit {
  bookings:PaginatedBooking;
  constructor(public service: BasicPaginationService) { }

  ngOnInit() {
    this.service.getBookings().then(bookings=>this.bookings = bookings);
  }

  prevPage() {
    this.service.getBookingsAtUrl(this.bookings.prev_page_url).then(bookings=>this.bookings = bookings);
  }

  nextPage() {
    this.service.getBookingsAtUrl(this.bookings.next_page_url).then(bookings=>this.bookings = bookings);
  }


}
