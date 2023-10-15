import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => InputPasswordComponent
      ),
      multi: true
    }
  ]
})
export class InputPasswordComponent implements ControlValueAccessor {
  @Input()
  parentForm!: FormGroup;

  @Input()
  fieldName!: string;

  @Input()
  label!: string;

  get formControl(): FormControl {
    return this.parentForm.get(this.fieldName) as FormControl;
  }

  fieldType: string = 'password';

  value!: string;
  changed!: (value: string) => void;
  touched!: () => void;
  isDisabled!: boolean;

  // constructor(@Inject(Injector) private injector: Injector) {
  // }

  ngOnInit(): void {
    // this.setComponentControl();
  }

  // setComponentControl(): void {
  //   const injectedControl = this.injector.get(NgControl);
  //   this.formControl = this.injector.get(FormGroupDirective).getControl(injectedControl as FormControlName);
  // }

  writeValue(value: string): void {
    this.value = value;
  }

  onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  togglePasswordVisible(): void {
    this.fieldType = this.fieldType === 'text' ? 'password' : 'text';
  }
}
