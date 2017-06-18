import { Component, OnInit } from '@angular/core';
import { NativeBookingService } from './native-booking.service' 

import { PaginatedBooking } from '../shared/paginated-booking.model'

@Component({
  selector: 'laravel-native',
  templateUrl: './laravel-native.component.html',
  styleUrls: ['./laravel-native.component.css']
})
export class LaravelNativeComponent implements OnInit {
  bookings:PaginatedBooking;
  constructor(public service: NativeBookingService) { }

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
