import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appChange]'
})
export class ChangeDirective {
  // data type declaration included
   @Input() myName:string = "";
  constructor(private el:ElementRef) {}
   ngOnInit(){
    this.getDirective(); 
    // Moved function definition from ngOnInit only call to the method included here 
   }
  getDirective() {
    alert("Custom Directive Creation")
    this.el.nativeElement.style.backgroundColor = "grey";
    this.el.nativeElement.innerText = this.myName;
  }
}
