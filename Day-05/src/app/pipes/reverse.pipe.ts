import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
   nvalue: string='';
  transform(value: string,): any {
      this.nvalue=value.split('').reverse().join('');
      return this.nvalue;
  }

}
