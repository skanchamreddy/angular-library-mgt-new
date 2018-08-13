import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book/book.service';
import { SelectedBookComponent } from './selected-book/selected-book.component';
import { HighlighterDirective } from './directives/highlighter/highlighter.directive';
import { HoverElementDirective } from './directives/hover-elemnt/hover-element.directive';
import { BooksService } from './services/books.service';
import * as _ from 'lodash';
import { TreeviewModule } from 'ngx-treeview';
import { TooltipModule } from 'ngx-tooltip';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SelectedBookComponent,
    HighlighterDirective,
    HoverElementDirective
  ],
  imports: [
    BrowserModule,
    TreeviewModule.forRoot(),
    TooltipModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [
    BookService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
