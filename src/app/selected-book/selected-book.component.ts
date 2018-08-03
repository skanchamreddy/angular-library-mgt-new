import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-selected-book',
  templateUrl: './selected-book.component.html',
  styleUrls: ['./selected-book.component.css']
})
export class SelectedBookComponent implements OnInit, OnChanges {
  @Input() book: Book;
  className: any;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change: SimpleChanges) {
    const book = change['book'].currentValue;
    this.className = { 'blue': book.code === 'B001', 'green': book.code === 'B002'};
  }

}
