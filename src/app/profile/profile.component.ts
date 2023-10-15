import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ModalService } from '../shared/modal/services/modal.service';
import { ProfileFormComponent } from './profile-form/profile-form.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @ViewChild('modalTemplate', { static: true }) modalTemplate!: TemplateRef<any>;

  form!: FormGroup;

  get profileForms(): FormArray {
    return this.form.get('profiles') as FormArray;
  }

  constructor(
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.modalService.viewContainerRef = this.viewContainerRef;
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      profiles: new FormArray([
        ProfileFormComponent.createForm()
      ]),
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    if (this.form.valid) {

    }
  }

  addProfile(): void {
    this.profileForms.push(ProfileFormComponent.createForm());
  }

  deleteProfile(index: number): void {
    this.profileForms.removeAt(index);
  }

  openModal(): void {
    this.modalService
      .open(this.modalTemplate, { size: 'lg', title: 'Title' })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
}
