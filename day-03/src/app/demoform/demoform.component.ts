import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demoform',
  templateUrl: './demoform.component.html',
  styleUrls: ['./demoform.component.css']
})
export class DemoformComponent  {

  
      user = {
        name : '' 
      };
      submitted=false;
      onSubmit() {
       this.submitted =true;
       console.log(this.user)
      }
}
