import { ElementRef } from '@angular/core';
import { ChangeDirective } from './change.directive';

describe('ChangeDirective', () => {
  it('should create an instance', () => {
    const el:ElementRef = {} as ElementRef;
    const directive = new ChangeDirective(el);
    expect(directive).toBeTruthy();
  });
});
