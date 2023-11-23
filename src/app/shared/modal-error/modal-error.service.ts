import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalErrorComponent } from './modal-error.component';
import { ErrorContent } from './model/error-content.model';

@Injectable()
export class ModalErrorService {

  constructor(private modalService: NgbModal) { }

  open(errorContent: ErrorContent): NgbModalRef {
    const modalRef = this.modalService.open(ModalErrorComponent);
    modalRef.componentInstance.data = errorContent;
    return modalRef;
  }
}
