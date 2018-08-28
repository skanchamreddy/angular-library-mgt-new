import { TestBed, inject } from '@angular/core/testing';
import{HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { BooksService } from './books.service';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { iterateListLike } from '../../../node_modules/@angular/core/src/change_detection/change_detection_util';
import { Book } from '../models/book.model';

describe('BooksService', () => {
  let service :BooksService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [BooksService
      ,HttpClient
      ]
    });
    const httpMock = TestBed.get(HttpTestingController);
    service= TestBed.get(BooksService);
  });

  it('should be created', inject([BooksService], (service: BooksService) => {
    expect(service).toBeTruthy();
  }));

  describe('getBooks',()=>{
    it('should make http request and get books',()=>{
     
      service.getBooks().subscribe(data=>console.log(data));
    })
  });
});
