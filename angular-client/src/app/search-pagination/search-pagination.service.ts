import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { PaginatedBooking } from '../shared/paginated-booking.model'

@Injectable()
export class SearchPaginationService {
    private bookingUrl: string = '/api/bookings'
    private bookingSearchUrl: string = '/api/bookings/search/?term='
    public isLoading: boolean = false;
    constructor(private http: Http) { }
    
    getBookings(): Promise<PaginatedBooking>{
        this.isLoading = true;
        return this.http.get(this.bookingUrl)
        .toPromise()
        .then((response) => {
            this.isLoading = false;
            return response.json() as PaginatedBooking
        })
        .catch(this.handleError);
    }

    getBookingsAtUrl(url: string): Promise<PaginatedBooking>{
        this.isLoading = true;
        return this.http.get(url)
        .toPromise()
        .then((response) => {
            this.isLoading = false;
            return response.json() as PaginatedBooking
        })
        .catch(this.handleError);
    }

    search(term: string) : Promise<PaginatedBooking>{
        this.isLoading = true;
        return this.http.get(`${this.bookingSearchUrl}${term}`)
        .toPromise()
        .then((response) => {
            this.isLoading = false;
            return response.json() as PaginatedBooking
        })
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        this.isLoading = false;
        return Promise.reject(error.message || error);
    }
}