import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public reactiveForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      details:new FormGroup({
        fname : new FormControl(null,[Validators.required,Validators.minLength(3)]),
        email: new FormControl(null,[Validators.required,Validators.email]),
        textbox: new FormControl(null,[Validators.required])
      }, [this.noSpaceAllowed()]),
      country:new FormControl('India',[Validators.required]),
      // skills:new FormArray([
      //   new FormControl(null,Validators.required),
      // ])
    });
  }

  onSubmit() {
    if(this.reactiveForm.valid) {
      console.log(this.reactiveForm)
    }
  }

  // get formSkills() {
  //   return <FormArray>this.reactiveForm.get('skills');
  // }
  // get skills(): FormArray {
  //   return this.reactiveForm.get('skills') as FormArray;
  // }
  //  addSkill() {
  //   (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null))
  // }

  noSpaceAllowed(): ValidatorFn {
    return (control: AbstractControl): {noSpaceAllowed:boolean} | null => {
      const _control = control.get('fname');
      if(_control?.value!=null && _control?.value.indexOf(' ') != -1) {
        return {noSpaceAllowed:true};
      }
      return null;
    }
    
  }

}


