import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user = {
    name: '',
    email: '',
    age: null
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.user)
  }

  

}
