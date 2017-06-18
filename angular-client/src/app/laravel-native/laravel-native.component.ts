import { Component, OnInit } from '@angular/core';
import { NativeBookingService } from './native-booking.service' 

@Component({
  selector: 'laravel-native',
  templateUrl: './laravel-native.component.html',
  styleUrls: ['./laravel-native.component.css']
})
export class LaravelNativeComponent implements OnInit {
  bookings:any;
  constructor(private service: NativeBookingService) { }

  ngOnInit() {
    debugger
    this.bookings = this.service.getBookings();
  }

}
