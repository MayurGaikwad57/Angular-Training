import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  // camelCase notations used
isSubmitted:boolean = false;
onSubmit() {
  this.isSubmitted=!this.isSubmitted;
  console.log('Submit button clicked');
  console.log('isSubmitted:', this.isSubmitted);
 }

submit:boolean=false;

complete(){
  this.submit = !this.submit;
}
// function name also changed to camelCase
getClass() {
  if(this.submit){
    return "col-md-3";
  }
  else {
    return "col-md-6";
  }
}
// prodDetails ={
//   prodname : 'Velocious',
//   prodspec : 'VIM',
//   prodQuant : '20';
// }
  constructor() { }

  ngOnInit(): void {
  }

}
