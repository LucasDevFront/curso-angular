import { Directive, HostListener, HostBinding, ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;  
  }
  private backgroundColor: string;

  constructor(
    private ElementRef: ElementRef,
    private Renderer2: Renderer2
  
  ) { }

}
