import { Component, DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HoverElementDirective } from './hover-element.directive';

@Component({
  template: `
    <p class="my-p-tag" appHoverElement> This is some test text. </p>
  `
})
class TestComponent {}

fdescribe('HoverElementDirective', () => {  
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let pTag: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        TestComponent,
        HoverElementDirective
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    pTag = fixture.debugElement.query(By.css('p'));
    fixture.detectChanges();
  });

  it('should handle mouse enter', () => {
    pTag.nativeElement.style.fontWeight = 'normal';
    pTag.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(pTag.nativeElement.style.fontWeight).toEqual('bold');
  });

  it('should handle mouse leave', () => {
    pTag.nativeElement.style.fontWeight = 'bold';
    pTag.triggerEventHandler('mouseleave', null);
    fixture.detectChanges();
    expect(pTag.nativeElement.style.fontWeight).toEqual('normal');
  });
});
