import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Book } from '../models/book.model';
import { BookService } from './book.service';

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.css"]
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() selected: EventEmitter<Book> = new EventEmitter<Book>();

  constructor(private bookService:BookService) {}

  ngOnInit() {}

  bookClicked() {
    this.selected.emit(this.book);
  }
}
