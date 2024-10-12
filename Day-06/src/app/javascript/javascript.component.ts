import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Shared/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css'],
})
export class JavascriptComponent implements OnInit {
 title = "Javascript";
  constructor(private enrollservice: EnrollService) {

   }
  onEnrollClicked() {
    this.enrollservice.onEnrollClicked(this.title);
    

  }
  ngOnInit(): void {
  }

}
