import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  @HostListener('mouseenter')
  onHover() {
    this.element.nativeElement.className =
      'animate__animated animate__heartBeat text-success';
  }
  @HostListener('mouseleave')
  onLeave() {
    this.element.nativeElement.className = '';
  }
  constructor(private element: ElementRef<HTMLElement>) {}
}
