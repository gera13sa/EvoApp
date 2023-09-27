import { Component } from '@angular/core';
import { BooksService } from './books.service';
import { IBook } from './book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private booksService: BooksService) {}

  booksArray: IBook[] = [];

  create_book: IBook = {
    id: null,
    title: null,
    author: null,
  };

  pushBook() {
    this.booksArray.push({
      id: this.booksArray.length,
      title: this.create_book.title,
      author: this.create_book.author,
    });
  }

  ngOnInit() {
    this.booksArray = this.booksService.getBooksArray();
  }
}
