import { Component, OnInit } from '@angular/core';
import { NativeBookingService } from './native-booking.service' 

import { Booking } from '../shared/booking.model'
import { PaginatedBooking } from '../shared/paginated-booking.model'

@Component({
  selector: 'laravel-native',
  templateUrl: './laravel-native.component.html',
  styleUrls: ['./laravel-native.component.css']
})
export class LaravelNativeComponent implements OnInit {
  bookings:PaginatedBooking;
  constructor(private service: NativeBookingService) { }

  ngOnInit() {
    this.service.getBookings().then(bookings=>this.bookings = bookings);
  }

}
