import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  allSuggestions: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Grapes','Bthana','bauanana'];
  filteredSuggestions: string[] = [];
  showSuggestions = false;
  // formControl !: FormControl;
  placeholder = 'Name';


  constructor() {}

  ngOnInit(): void {
    this.userForm();
    // this.inputControlChange();
  }

  // inputControlChange() {
  //   this.reactiveForm.get('details.fname')?.valueChanges
  //     .subscribe(value => {
  //       this.formControl = value;
  //     });
  // }

  // onSelectSuggestion(suggestion: string) {
  //   this.reactiveForm.get('details.fname')?.setValue(suggestion);
  //   this.showSuggestions = false;
  // }
  userForm() {
    this.reactiveForm = new FormGroup({
      details: new FormGroup({
        fname: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      country: new FormControl(''),
      skills: new FormArray([
        new FormControl(null),
      ])
    });
    this.reactiveForm.controls['country'].patchValue('India');

    // this.formControl = this.reactiveForm.get('details.fname') as FormControl;
  }
  

  // onFocus(){
  //   const val = this.reactiveForm.get('details.fname')?.value
  //   console.log("Focus truggered")
  //   if(this.allSuggestions.includes(val)) {
  //     // this.filterSuggestions(val);
  //     this.showSuggestions = false;
  //     return
  //   }
  //   this.filterSuggestions(val);
  //   this.showSuggestions = this.filteredSuggestions.length > 0;
    
  // }
  
  
  // filterSuggestions(value: string) {
  //   console.log("The value is", value);
  
  //   const filteredValue = value?.toLowerCase() || '';
  
  //   // If empty, hide suggestions
  //   if (!filteredValue) {
  //     this.filteredSuggestions = [];
  //     this.showSuggestions = false;
  //     return;
  //   }
  
  //   // Filter suggestions
  //   this.filteredSuggestions = this.allSuggestions.filter(option =>
  //     option.toLowerCase().includes(filteredValue)
  //   );
  
  //   // Show suggestions only if:
  //   // - We have matching suggestions
  //   // - The value is not a full exact match (i.e., prevent showing list when already selected)
  //   this.showSuggestions =
  //     this.filteredSuggestions.length > 0 &&
  //     !this.allSuggestions.includes(value);
  // }
  

  onSubmit() {
    console.log("Call Triggered",this.reactiveForm.value); // Fixed to log the form value instead of the method
  }

  // noSpaceAllowed(): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     const isValid = control.value && control.value.indexOf(' ') === -1;
  //     return isValid ? null : { noSpaceAllowed: true };
  //   };
  // }

  handleSelection(value:any){
   
  }


}
