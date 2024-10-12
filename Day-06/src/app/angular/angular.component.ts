import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Shared/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],    // EnrollService is a type for which we need instances 
})
export class AngularComponent implements OnInit {
  title = "Angular Course"
  constructor(private angservice:EnrollService) 
  { }

  ngOnInit(): void {
  }
  onEnrolled() {
    this.angservice.onEnrollClicked(this.title);
  }

}
