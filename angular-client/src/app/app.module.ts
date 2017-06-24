import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { BasicPaginationComponent } from './basic-pagination/basic-pagination.component';
import { BasicPaginationService } from "app/basic-pagination/basic-pagination.service";


@NgModule({
  declarations: [
    AppComponent,
    BasicPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'basic-pagination', component: BasicPaginationComponent },
      { path: '',
        redirectTo: '/basic-pagination',
        pathMatch: 'full'
      }
    ])
    // other imports here
  ],
  providers: [BasicPaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
