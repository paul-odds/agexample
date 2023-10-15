import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text.component';
import { FieldErrorsModule } from '../field-errors/field-errors.module';


@NgModule({
  declarations: [
    InputTextComponent
  ],
  imports: [
    CommonModule,
    FieldErrorsModule
  ],
  exports: [
    InputTextComponent
  ]
})
export class InputTextModule { }
