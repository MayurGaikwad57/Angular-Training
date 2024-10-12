import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {
    public counter : number = 0;
  constructor() { }

  ngOnInit(): void {
  }
   Increment() {
    this.counter++;
   }
   Decrement() {
    this.counter--;
   }
}
