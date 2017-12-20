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
  constructor( private bookService: BookService) { 
    this.nameSearch ='';
  }

  getBooks(){
  this.books = this.bookService.getBooks();
  }

  ngOnInit() {
   this.getBooks();
  }

}
