import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // Changes Made camelCase notations used
  showMe2:boolean = false  
  showMe:boolean = false
  salary:number = 25000
  members= ["Mayur","Gaurav"]

  constructor() { }

  toggle() {
    this.showMe = !this.showMe
  }

  ngOnInit(): void {
  }

}
