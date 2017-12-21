import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{

  newBook: Book;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private bookService: BookService) { 
      this.newBook = new Book();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addItem(){
    this.bookService.addBook(this.newBook);
    this.newBook = new Book();

  }
}
