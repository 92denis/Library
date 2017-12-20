import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksItemComponent } from './books-item/books-item.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule, MatFormFieldModule} from '@angular/material';

import { BookService } from './book.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksItemComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
