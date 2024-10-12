import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterViewInit {
     @ViewChild("newmember") child !: ElementRef;
    public counter = 0;
  constructor() { }
    
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log(this.child)
    this.child.nativeElement.style.color = "red";
  }
  Increment() {
    this.counter++
  }

  Decrement() {
    this.counter--;
  }
}
