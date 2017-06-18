import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { PaginatedBooking } from '../shared/paginated-booking.model'

@Injectable()
export class NativeBookingService {
    private bookinUrl: string = '/api/bookings'
    constructor(private http: Http) { }
    
    getBookings(): Promise<PaginatedBooking>{
        return this.http.get(this.bookinUrl)
        .toPromise()
        .then(response => response.json() as PaginatedBooking)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}