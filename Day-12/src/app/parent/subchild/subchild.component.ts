import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-subchild',
  templateUrl: './subchild.component.html',
  styleUrls: ['./subchild.component.css']
})
export class SubchildComponent implements OnInit,AfterContentInit {
    @ContentChild("head")Head!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.setColor();
  }
  setColor() {
    console.log(this.Head);
    this.Head.nativeElement.setAttribute('style', 'color:red')
  }
}
