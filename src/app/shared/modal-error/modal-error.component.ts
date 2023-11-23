import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorContent } from './model/error-content.model';

@Component({
  selector: 'app-modal-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-error.component.html',
  styleUrl: './modal-error.component.scss'
})
export class ModalErrorComponent {
  @Input() data!: ErrorContent;

  activeModal: NgbActiveModal;

  constructor(private ngbActiveModal: NgbActiveModal) {
    this.activeModal = this.ngbActiveModal;
  }
}
