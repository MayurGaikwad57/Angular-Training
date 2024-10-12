import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  spinner:boolean = false;
  opened:boolean=false;
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogComponent)
  }
  Opened() {
    this.opened = true;
  }
  log(state: any) {
    console.log(state)
  }
  logChange(state:any) {
    console.log(state)
  }
  load() {
    this.spinner=true; {
      setTimeout(()=>{
        this.spinner=false;
      },5000);
    }
  }
}
