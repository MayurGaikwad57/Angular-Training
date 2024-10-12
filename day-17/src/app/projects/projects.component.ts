import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { IEmployee } from '../employee';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit,OnDestroy {
  public employee : IEmployee[] = [];
  private employeeSubscription !: Subscription;
  private subscriptionFlag = false;
  // Good practice instead of definingit as any we should create a inteface that has all the required variable types 
  // which helps for strict type checking 
  constructor(private data:ServiceService) {}
  ngOnInit(): void {
    this.fetchEmployees();
  }
  fetchEmployees() {
    this.employeeSubscription=this.data.getEmployees()
    .subscribe(data => this.employee =data);
    this.subscriptionFlag = true;
  }
  ngOnDestroy() {
    if(this.employeeSubscription) {
      this.employeeSubscription.unsubscribe();
    }
    this.subscriptionFlag = false;
  }
  subscriptionStatus() {
     console.log("Is Subscribed ",this.subscriptionFlag);
  }
  
}
