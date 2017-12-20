import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'books-item',
  templateUrl: './books-item.component.html',
  styleUrls: ['./books-item.component.css']
})
export class BooksItemComponent implements OnInit {

  @Input() book: Book;
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }
  
  deleteBook() {
    this.bookService.deleteBook(this.book);
  }
}
