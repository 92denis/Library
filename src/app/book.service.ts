import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookService {

  private books: Book[] = [{
    id: 1,
    name: 'Windstorm',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gladzor_University%2C_13-14th_century%2C_village_Vernashen%2C_Vayots_Dzor%2C_Armenia%2C_10.jpg/350px-Gladzor_University%2C_13-14th_century%2C_village_Vernashen%2C_Vayots_Dzor%2C_Armenia%2C_10.jpg',
    genre: 'Драмма',
    description: 'sdfasf',
    links: []  
  }, {
    id: 2,
    name: 'Wind',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gladzor_University%2C_13-14th_century%2C_village_Vernashen%2C_Vayots_Dzor%2C_Armenia%2C_10.jpg/350px-Gladzor_University%2C_13-14th_century%2C_village_Vernashen%2C_Vayots_Dzor%2C_Armenia%2C_10.jpg',
    genre: 'Детектив',
    description: 'sdfasf',
    links: [] 
  }];
  constructor() { }

  getBooks(){
    return this.books;
  }

}
