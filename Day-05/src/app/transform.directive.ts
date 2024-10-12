import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTransform]'
})
export class TransformDirective {
  @Input() name = " ";
  constructor(private el: ElementRef) {}
  
  ngOnInit() {
    this.getColor(); // cleaned ngOnInit() moved definitions outside function 
  }

   getColor() {
    this.el.nativeElement.innerText = this.name;
    /* We cannot take input inside constructor  */
    this.el.nativeElement.style.backgroundColor='yellow';
   }
}
