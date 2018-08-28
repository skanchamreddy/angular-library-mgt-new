import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import { Book } from './models/book.model';
import { BooksService } from './services/books.service';
import { TreeviewItem } from 'ngx-treeview';
import { FilterPipe } from './pipes/filter/filter.pipe';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // @ViewChild('bName') bookName: ElementRef;
  // name: string = 'default value';
  // selectedBook: Book;
  // books: any;
  mydata: TreeviewItem[] = [];
  date: Date;
  constructor(private booksService: BooksService,
    private filter: FilterPipe
  ) { }
  filterText: string;

  ngOnInit() {
    this.date = new Date();    
  }

  
  

  checkName(element: HTMLInputElement) {
    console.log(element.value);
  }
  filterBooks() {

  }
}
