import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = {
      name: 'A',
      code: 'a',
      author: 'Author A',
      thumbnail: 'a'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('bookClicked', () => {
    it('should call the emit function on the selected property', () => {
      spyOn(component.selected, 'emit');
      
      component.bookClicked();

      expect(component.selected.emit).toHaveBeenCalledWith(jasmine.objectContaining({code: 'a'}));
    })
  });
});
