import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { BasicPaginationComponent } from './basic-pagination/basic-pagination.component';
import { BasicPaginationService } from "./basic-pagination/basic-pagination.service";
import { SearchPaginationComponent } from './search-pagination/search-pagination.component';
import { SearchPaginationService } from "./search-pagination/search-pagination.service";


@NgModule({
  declarations: [
    AppComponent,
    BasicPaginationComponent,
    SearchPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'basic-pagination', component: BasicPaginationComponent },
      { path: 'search-pagination', component: SearchPaginationComponent },
      { path: '',
        redirectTo: '/basic-pagination',
        pathMatch: 'full'
      }
    ])
    // other imports here
  ],
  providers: [BasicPaginationService, SearchPaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
