import { Directive, OnInit, ElementRef, Renderer2, Input, OnChanges, HostBinding } from '@angular/core';
import { Book } from '../../models/book.model';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit, OnChanges {
  @Input() book: Book;
  
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
   }

  ngOnInit() {
    console.log(this.elRef.nativeElement);
  }

  ngOnChanges() {
    const color = this.book.code === 'B001' ? 'yellow' : 'purple'; 
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', color);
  }
}
