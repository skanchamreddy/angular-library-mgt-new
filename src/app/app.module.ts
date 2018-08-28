import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router';
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
import { ShortenPipe } from './pipes/shorten/shorten.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './contact/contactus/contactus.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDetailsComponent } from './books-details/books-details.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { FirstNameValidatorDirective } from './validators/first-name.directive';

const routes :Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"books",component:BooksListComponent},
  {path:"books/:id",component:BooksDetailsComponent},
  {path:"contact",component:ContactusComponent},
  {path:"login" ,component:LoginPageComponent},
  {path:"registation",component:RegistrationComponent},
  {path:"**", redirectTo:"home"}
];

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    SelectedBookComponent,
    HighlighterDirective,
    HoverElementDirective,
    ShortenPipe,
    FilterPipe,
    PipesExampleComponent,
    HomeComponent,
    ContactusComponent,
    BooksListComponent,
    BooksDetailsComponent,
    LoginPageComponent,
    RegistrationComponent,
    FirstNameValidatorDirective
  ],
  imports: [
    BrowserModule,
    TreeviewModule.forRoot(),
    TooltipModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService,
    BooksService,
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
