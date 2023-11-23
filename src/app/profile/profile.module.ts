import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from '../shared/modal/modal.module';
import { InputPasswordModule } from '../shared/form/input-password/input-password.module';
import { InputTextModule } from '../shared/form/input-text/input-text.module';
import { ModalErrorModule } from '../shared/modal-error/modal-error.module';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    InputTextModule,
    InputPasswordModule,
    ModalModule,
    ModalErrorModule
  ]
})
export class ProfileModule { }
