import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(books, value) {
    if (value === "") {
      return books;
    } else {
      return books.filter(book => {
        return book.name.toLowerCase().includes(value.toLowerCase())
          || book.genre.toLowerCase().includes(value.toLowerCase());
      });
    }
  }
}
