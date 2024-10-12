import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  reactiveForms! : FormGroup
  constructor() {}
   
  ngOnInit(): void {
   this.getForm();  // form definition moved outside ngOnInit() 
  }

  getForm() {
    this.reactiveForms = new FormGroup({
      fname: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required,Validators.email]),
      country : new FormControl(null,Validators.required)
    })
  }
  onSubmit() {
    console.log(this.reactiveForms);
  }

}
