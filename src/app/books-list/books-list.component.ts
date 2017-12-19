import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[];
  constructor( private bookService: BookService) { }

  getBooks(){
  this.books = this.bookService.getBooks();
  }

  ngOnInit() {
   this.getBooks();
  }

}
