import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditComponent } from '../add-edit/add-edit.component';
import { EmployeeService } from '../Services/employee.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'dob','gender','education','company','experience','package','action'];
  dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


    //  preferred using _ for dependecy injected variable
    constructor(private _dialog: MatDialog, private _empService: EmployeeService) {}

  ngOnInit(): void {
      this.getEmployeeList();
    }
  getEmployees() {
      const dialogRef = this._dialog.open(AddEditComponent);
      dialogRef.afterClosed().subscribe({
        next:(val) => {
          if(val){
            this.getEmployeeList();
          }
        }
      })
    }
  getEmployeeList(){
      this._empService.getEmployeeList().subscribe({
        next: (res) => {
          this.dataSource= new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: console.log,
      })
    }
    deleteEmployee(id:number) {
      this._empService.deleteEmployee(id).subscribe({
        next:(res) => {
        alert("Employee Deleted" );
        this.getEmployeeList();
        },
        error:console.log,
      })
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    openEdit(data:any) {
     const dialogRef =  this._dialog.open(AddEditComponent,{
        data,
      });
      dialogRef.afterClosed().subscribe({
        next:(val) => {
          if(val){
            this.getEmployeeList();
          }
        },
      });
    }
  }





