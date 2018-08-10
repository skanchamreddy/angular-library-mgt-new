import { Book } from '../models/book.model';
import { BookService } from '../book/book.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/of';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { urls } from '../constants/urls.constant';

@Injectable()
export class BooksService {
  private books: Book[] = [{
    code: "B001",
    name: "Object Oriented Programming with C++",
    thumbnail:
      "http://www.vikaspublishing.com/uploads/bookimages/vikas-books/9789325975644.JPG",
    author: "Rohit Khurana"
  }, {
    code: "B002",
    name: "Data Structures using C",
    thumbnail:
      "https://images-na.ssl-images-amazon.com/images/I/51X%2Bh4njKZL._SX369_BO1,204,203,200_.jpg",
    author: "E Balaguruswamy"
  }]
  constructor(
    private http:HttpClient,
    private bookService: BookService
  ) { }

  // getBooks(): Observable<Book[]> {
  //   return Observable.of(this.books); 
  //   //return Observable.throw('Data not found');
  // }

  getBooks(): Observable<Book[]> {
    return this.http.get(environment.baseUrl + urls.books)
    .map(data => {
      const books: Book[] = (<Book[]>data)
        .sort((a: Book, b: Book) => a.name > b.name ? 1 : -1); 
      return books;
    });
  }
}
