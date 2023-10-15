import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent implements OnInit {
  @Input()
  formName!: string;

  @Input()
  indexChildForm!: number;

  @Output()
  deleteProfileEvent: EventEmitter<number> = new EventEmitter<number>();

  get profileForm(): FormArray {
    return this.parentForm.form.get(this.formName) as FormArray;
  }

  childForm!: FormGroup;

  constructor(private parentForm: FormGroupDirective) {}

  ngOnInit(): void {
    this.childForm = (this.profileForm.at(this.indexChildForm) as FormGroup);
  }

  static createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('', {validators: [Validators.required]}),
      lastName: new FormControl('', {validators: [Validators.required]}),
      otp: new FormControl('', {validators: [Validators.required]}),
    });
  }

  deleteProfile(index: number): void {
    this.deleteProfileEvent.emit(index);
  }
}
