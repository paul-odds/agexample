import { Component, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { ModalService } from '../shared/modal/services/modal.service';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ModalErrorService } from '../shared/modal-error/modal-error.service';
import { ErrorContent } from '../shared/modal-error/model/error-content.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  // @ViewChild('modalTemplate', { static: true }) modalTemplate!: TemplateRef<any>;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  // @ViewChild('modalTemplates', { static: true }) modalTemplates!: TemplateRef<any>;

  form!: FormGroup;

  get profileForms(): FormArray {
    return this.form.get('profiles') as FormArray;
  }

  constructor(
    private modalService: ModalService,
    private viewContainerRef: ViewContainerRef,
    private modalErrorService: ModalErrorService
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

    this.form.valueChanges.subscribe((v: FormGroup) => {
      console.log(v);
    });
  }

  submit(): void {
    console.log(this.form.getRawValue());
    // if (this.form.valid) {

    // }
  }

  addProfile(): void {
    this.profileForms.push(ProfileFormComponent.createForm());
  }

  deleteProfile(index: number): void {
    this.profileForms.removeAt(index);
  }

  openModalError(): void {
    this.modalErrorService.open(new ErrorContent());
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openModal(content: TemplateRef<any>): void {
    this.modalService
      .open(content, { size: 'lg', title: 'Title' })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  openModals(content: TemplateRef<any>): void {
    this.modalService
      .open(content, { size: 'lg', title: 'Title 2' })
      .subscribe((action) => {
        console.log('modalAction', action);
      });
  }
}
