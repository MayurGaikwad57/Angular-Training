import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day-11';
  Title:string = "Parent Component";
  nameinput = ' ';
  markinput = ' ';
  
  TransferData(name:any,mark:any) {
    this.nameinput=name;
    this.markinput=mark;
  }
  
  changeName(newname:string) {
    this.nameinput = newname;
  }
}
