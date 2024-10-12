import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  condition: boolean = false;
  getClass() {
    if (this.condition) {
      return 'background-color'
    } else {
      return 'color'
    }
  }
  display: boolean = false;
  onSubmit() {
    this.display = !this.display;
    console.log(this.Users);
  }
  // point of doubt how to give objects name small,capital or camelCase
  Users = [{
    name: 'Mayur',
    email: 'gmayur96k@gmail.com',
    num: '99'
  },
  {
    name: 'Gaurav',
    email: 'gauravjha@11',
    num: '99'
  },
  {
    name: 'Anil',
    email: 'donail@78',
    num: '99'
  }];
  userDetails(index:number,value:any) {
  return value.name;
  } 
  constructor() { }

  ngOnInit(): void {
  }

}
