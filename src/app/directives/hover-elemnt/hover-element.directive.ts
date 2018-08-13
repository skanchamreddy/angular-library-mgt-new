import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverElement]'
})
export class HoverElementDirective {
  @HostBinding('style.fontWeight') fw: string;

  constructor(
    private elRef: ElementRef
  ) { }

  @HostListener('mouseenter') onHoverIn() {
    this.fw = 'bold';
  }

  @HostListener('mouseleave') onHoverOut() {
    this.fw = 'normal';
  }

}
