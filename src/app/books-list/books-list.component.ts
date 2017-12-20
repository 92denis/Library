import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { NgForm } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  nameSearch: string;
  books: Book[];
  
  constructor( private bookService: BookService, public dialog: MatDialog) { 
    this.nameSearch ='';
  }

  getBooks(){
   this.books = this.bookService.getBooks();
  }

  ngOnInit() {
   this.getBooks();
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '250px',
    });
   }

}
