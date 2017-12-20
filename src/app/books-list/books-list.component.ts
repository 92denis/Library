import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  nameSearch: string;
  books: Book[];
  newBook: Book;

  constructor( private bookService: BookService) { 
    this.nameSearch ='';
    this.newBook = new Book();
  }

  getBooks(){
   this.books = this.bookService.getBooks();
  }

  addItem(){
    // this.newBook.id = this.books.length != 0 ? this.books[this.books.length -1].id +1 : 1;
    this.bookService.addBook(this.newBook);
    this.newBook = new Book();
  }

  ngOnInit() {
   this.getBooks();
  }

}
