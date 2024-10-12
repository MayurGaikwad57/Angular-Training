import { Component, OnInit } from '@angular/core';

interface FormArray {
  productName: string;
  productType: string;
  productQuantity: number;
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  toggler:boolean = false;
  numbers: number[] = [1, 2, 3, 4];
  selectedNumber:number = 1;
  forms: FormArray[] = [{
    productName: '',
    productType: '',
    productQuantity: 0
  }];
  submit:string= 'Submit';
  check:string = 'Check for ngClass';

  onSelectionChange() {
    this.forms = [];
    for (let i = 0; i < this.selectedNumber; i++) {
      this.forms.push({
        productName: '',
        productType: '',
        productQuantity: 0
      });
    }
  }

  onSubmit(): void {
    console.log(this.forms);
  }

  getClass(): string {
    if (this.toggler) {
      return 'checker';
    }
    else {
      return 'product';
    }
  }

  classToggler(): void {
    this.toggler = !this.toggler;
  }



  ngOnInit(): void {
  }

}
