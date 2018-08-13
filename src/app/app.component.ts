import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Book } from './models/book.model';
import { BooksService } from './services/books.service';
import { TreeviewItem } from 'ngx-treeview';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild('bName') bookName: ElementRef;
  name: string = 'default value';
  selectedBook: Book;
  books: any;
  mydata:TreeviewItem[] = [];
  
  constructor(private booksService: BooksService) {}

  ngOnInit() {
    this.booksService.getBooks()
      .subscribe(
        (books: Book[]) => {
          this.books = books;
        }, (err: any) => {
          console.log(err);
        }
      );

      let item = new TreeviewItem({
        text: 'IT', value: 9, children: [
            {
                text: 'Programming', value: 91, children: [{
                    text: 'Frontend', value: 911, children: [
                        { text: 'Angular 1', value: 9111 },
                        { text: 'Angular 2', value: 9112 },
                        { text: 'ReactJS', value: 9113 }
                    ]
                }, {
                    text: 'Backend', value: 912, children: [
                        { text: 'C#', value: 9121 },
                        { text: 'Java', value: 9122 },
                        { text: 'Python', value: 9123, checked: false }
                    ]
                }]
            },
            {
                text: 'Networking', value: 92, children: [
                    { text: 'Internet', value: 921 },
                    { text: 'Security', value: 922 }
                ]
            }
        ]
     });
  
     this.mydata.push(item);
  }

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
