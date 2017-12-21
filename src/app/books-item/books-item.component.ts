import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css']
})
export class BooksItemComponent implements OnInit {

  @Input() book: Book;
  constructor(private bookService: BookService,  public dialog: MatDialog) { }

  ngOnInit() {
  }

  deleteBook() {
    this.bookService.deleteBook(this.book);
  }

  editBook(): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
      data: { newBook: this.book}
    });
  }
}
