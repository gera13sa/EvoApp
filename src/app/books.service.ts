import { Injectable } from '@angular/core';
import { IBook } from './book.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  booksArray: IBook[] = [
    {
      id: 1,
      title: 'КниггаРаз',
      author: 'Иванов',
    },
    {
      id: 2,
      title: 'КниггаДва',
      author: 'Сидоров',
    },
    {
      id: 3,
      title: 'КниггаТри',
      author: 'Козлов',
    },
  ];

  getBooksArray(): IBook[] {
    return this.booksArray;
  }

  push(book: IBook): void {
    this.booksArray.push(book);
  }
}
