import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[NgElse]'
})
export class NgElseDirective {

  @Input() set NgElse(condition: boolean){
      if(!condition){
       this.ViewContainerRef.createEmbeddedView(this.TemplatRef);
      } else {
         this.ViewContainerRef.clear();
      }
  }

  constructor(
    private TemplatRef: TemplateRef<any>,
    private ViewContainerRef: ViewContainerRef
  ) { }

}
