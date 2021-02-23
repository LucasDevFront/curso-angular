import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private Renderer2: Renderer2
  ) { 
    this.Renderer2.setStyle(this.elementRef.nativeElement,
     'background-color', 'yellow' );
  }

}
