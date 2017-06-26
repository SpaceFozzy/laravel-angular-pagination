import { Component, OnInit } from '@angular/core';
import { SearchPaginationService } from './search-pagination.service' 

import { PaginatedBooking } from '../shared/paginated-booking.model'

@Component({
  selector: 'app-search-pagination',
  templateUrl: './search-pagination.component.html',
  styleUrls: ['./search-pagination.component.css']
})
export class SearchPaginationComponent implements OnInit {
  bookings:PaginatedBooking;
  constructor(public service: SearchPaginationService) { }

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
