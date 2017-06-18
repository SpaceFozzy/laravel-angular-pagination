import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { LaravelNativeComponent } from './laravel-native/laravel-native.component';
import { NativeBookingService } from "app/laravel-native/native-booking.service";


@NgModule({
  declarations: [
    AppComponent,
    LaravelNativeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'laravel-native', component: LaravelNativeComponent },
      { path: '',
        redirectTo: '/laravel-native',
        pathMatch: 'full'
      }
    ])
    // other imports here
  ],
  providers: [NativeBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
