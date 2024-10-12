import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.userForm();
  }

  userForm() {
    this.reactiveForm = new FormGroup({
      details: new FormGroup({
        fname: new FormControl(null, [Validators.required, this.noSpaceAllowed()]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      country: new FormControl('India'),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ])
    });
  }

  onSubmit() {
    console.log(this.reactiveForm.value); // Fixed to log the form value instead of the method
  }

  noSpaceAllowed(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const isValid = control.value && control.value.indexOf(' ') === -1;
      return isValid ? null : { noSpaceAllowed: true };
    };
  }
}
