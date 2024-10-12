import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
   @Input() namedata:string = '';
   @Input() markData:string = '';
   @Output() dataupdateevent = new EventEmitter<string>();
  name:string= " "
  constructor() { }

  ngOnInit(): void {}
  // changes made in template as said 
  // event now is emited in ts file instead of html
  onChange(name:string) {
    this.dataupdateevent.emit(name)
  }
}
