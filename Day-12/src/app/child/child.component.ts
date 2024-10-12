import { Component, ElementRef, AfterViewInit, OnInit, Output, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CounterComponent } from './counter/counter.component';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit {
  // @ViewChild("highlight")marker !: ElementRef;
  @ViewChildren("highlight") marker !: QueryList<any>;
  @ViewChild("viewChild") child !: CounterComponent;
  constructor() {}
  ngOnInit(): void {}
  ngAfterViewInit() {
   this.setStyles(); // code moved away from afterviewInit() only method called here
  }
  setStyles() {
    console.log(this.marker);
    this.marker.first.nativeElement.style.color = "red";
    this.marker.last.nativeElement.style.color = "green";
  }
  inc() {
    this.child.Increment();
  }
  dec() {
    this.child.Decrement();
  }

}
