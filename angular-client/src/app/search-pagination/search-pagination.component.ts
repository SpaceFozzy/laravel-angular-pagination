import { Component, OnInit } from '@angular/core';
import { SearchPaginationService } from './search-pagination.service'

import { PaginatedBooking } from '../shared/paginated-booking.model'
import { Subject } from "rxjs/Subject";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'search-pagination',
  templateUrl: './search-pagination.component.html',
  styleUrls: ['./search-pagination.component.css']
})
export class SearchPaginationComponent implements OnInit {
  bookings: PaginatedBooking;
  private searchTermStream = new Subject<string>();
  constructor(public service: SearchPaginationService) { }

  ngOnInit() {
    this.service.getBookings().then(bookings => this.bookings = bookings);
    this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .subscribe((term: string) => {
        this.service.search(term).then(bookings => this.bookings = bookings)
      });
  }

  prevPage() {
    this.service.getBookingsAtUrl(this.bookings.prev_page_url).then(bookings => this.bookings = bookings);
  }

  nextPage() {
    this.service.getBookingsAtUrl(this.bookings.next_page_url).then(bookings => this.bookings = bookings);
  }

  search(term: string) {
    this.searchTermStream.next(term);
  }

}
