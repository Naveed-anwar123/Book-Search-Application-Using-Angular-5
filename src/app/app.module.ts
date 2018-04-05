import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import {Routes, RouterModule} from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BookSearchService} from "./book-search.service";
import { SingleBookComponent } from './single-book/single-book.component';
import { PagerComponent } from './pager/pager.component';
import {BookContainerService} from "./book-container.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    SingleBookComponent,
    PagerComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path: 'home',
          component: HomeComponent
        },
        {
          path: 'search',
          component: SearchComponent,
        },
        {
          path: 'book/:bookId',
          component: SingleBookComponent
        },
        {
          path: '**',
          component: HomeComponent
        }
    ])
  ],
  providers: [BookSearchService , BookContainerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
