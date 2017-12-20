import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksItemComponent } from './books-item/books-item.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import { BookService } from './book.service';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksItemComponent,
    SearchPipe
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
