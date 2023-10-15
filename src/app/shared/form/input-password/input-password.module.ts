import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password.component';
import { FieldErrorsModule } from '../field-errors/field-errors.module';



@NgModule({
  declarations: [
    InputPasswordComponent
  ],
  imports: [
    CommonModule,
    FieldErrorsModule
  ],
  exports: [
    InputPasswordComponent
  ]
})
export class InputPasswordModule { }
