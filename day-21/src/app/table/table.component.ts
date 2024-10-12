import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../Services/service.service';
import { customer } from '../customer';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 
customerList!:customer[];
dataSource:any;
displayedColumns:string[] = ["code","name","email","phone","action"];
@ViewChild(MatPaginator) paginator: any = MatPaginator
@ViewChild(MatSort) sort :any = MatSort
  constructor(private service:ServiceService) { }

  getService() {
    this.service.getCustomer().subscribe( res =>{
      this.customerList = res;
      this.dataSource = new MatTableDataSource<customer>(this.customerList)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort
  });
  }
  filterChange(data:Event) {
   const value = (data.target as HTMLInputElement).value
   this.dataSource.filter = value
  }
  ngOnInit(): void {
    this.getService();

  }

}
