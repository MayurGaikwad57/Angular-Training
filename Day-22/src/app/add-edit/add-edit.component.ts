import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../Services/employee.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  education: string[] = [
    "Diploma",
    "B.E",
    "B.Tech",
    "10th",
    "12th",
  ]
  empForm: FormGroup
  constructor(private _fb: FormBuilder, private _empService: EmployeeService, private _dialogRef: MatDialogRef<AddEditComponent>,@Inject(MAT_DIALOG_DATA) public data:any) {
    this.empForm = this._fb.group({
      firstName: ' ',
      lastName: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: '',
    });

  }

  
  onSubmit() {
    if (this.empForm.valid) {
      if(this.data) {
        this._empService.updateEmployee(this.data.id,this.empForm.value).subscribe({
          next: (val: any) => {
            alert("Employee detail Updated Successfully");
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        })
      } else {
        this._empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            alert("Employee Added Successfully");
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        })
      }
      }
  }


  ngOnInit(): void { 
    this.empForm.patchValue(this.data)
  }
}
