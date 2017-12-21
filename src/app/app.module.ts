import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksItemComponent } from './books-item/books-item.component';
import { DialogComponent } from './dialog/dialog.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule, MatDialogModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatListModule, MatButtonModule, MatIconModule } from '@angular/material';
import { BookService } from './book.service';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksItemComponent,
    SearchPipe,
    DialogComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  entryComponents: [DialogComponent],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
