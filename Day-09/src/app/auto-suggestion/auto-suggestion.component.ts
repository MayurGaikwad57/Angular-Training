import {
  Component, Input, forwardRef, OnInit,
  OnChanges, SimpleChanges, EventEmitter, Output
} from '@angular/core';
import {
  ControlValueAccessor, NG_VALUE_ACCESSOR
} from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-auto-suggestion',
  templateUrl: './auto-suggestion.component.html',
  styleUrls: ['./auto-suggestion.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutoSuggestionComponent),
    multi: true
  }]
})
export class AutoSuggestionComponent implements OnInit, OnChanges, ControlValueAccessor {
  @Input() mode: 'text' | 'select' | 'textarea' = 'text';
  @Input() inputClass: string = '';
  @Input() allSuggestions: string[] = [];
  @Input() placeholder: string = '';
  
  @Output() suggestionSelected = new EventEmitter<string>();

  internalControl = new FormControl('');
  filteredSuggestions: string[] = [];
  showSuggestions = false;

  private onChange = (_: any) => {};
  public onTouched = () => {};

  ngOnInit(): void {
    this.internalControl.valueChanges.pipe(
      debounceTime(100),
      distinctUntilChanged()
    ).subscribe(value => {
      this.onChange(value);
      if (!value) {
        this.filteredSuggestions = [];
        this.showSuggestions = false;
      } else {
        this.filterSuggestions(value);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['allSuggestions']) {
      const value = this.internalControl?.value;
      if (value !== null && value !== undefined) {
        this.filterSuggestions(value);
      }
    }
  }

  filterSuggestions(value: string) {
    const searchValue = value?.toLowerCase() || '';
    if (!searchValue || this.allSuggestions.length === 0) {
      this.filteredSuggestions = [];
      this.showSuggestions = false;
      return;
    }

    const fuse = new Fuse(this.allSuggestions, {
      includeScore: true,
      threshold: 0.4,
    });

    const result = fuse.search(searchValue);
    this.filteredSuggestions = result.map(r => r.item);
    this.showSuggestions = this.filteredSuggestions.length > 0 &&
                           !this.filteredSuggestions.includes(value);
  }

  onSelectSuggestion(suggestion: string) {
    this.internalControl.setValue(suggestion, { emitEvent: true });
    this.onTouched();
    this.suggestionSelected.emit(suggestion);
    this.showSuggestions = false;
  }

  // ControlValueAccessor Methods
  writeValue(value: any): void {
console.log("Value called")
    // this.internalControl.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.internalControl.disable();
    } else {
      this.internalControl.enable();
    }
  }
}
