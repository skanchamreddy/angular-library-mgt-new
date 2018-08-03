import { Component, ElementRef, ViewChild } from "@angular/core";
import { Book } from './models/book.model';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild('bName') bookName: ElementRef;
  name: string = 'default value';
  selectedBook: Book;
  books: Book[] = [{
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
  }];

  onBookSelected(data: Book) {
    // console.log(data);
    this.selectedBook = data;
    // console.log(this.bookName.nativeElement.value);
    // this.bookName.nativeElement.value = 'Some new value';
  }

  checkName(element : HTMLInputElement) {
    console.log(element.value);
  }
}
