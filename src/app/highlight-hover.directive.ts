import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightHover]'
})
export class HighlightHoverDirective {

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter') onMousEnter34(){
    this.el.nativeElement.style.color = 'yellow'
  }

  @HostListener('mouseleave') onMouseLeve45(){
    this.el.nativeElement.style.color = 'red';
  }

}
