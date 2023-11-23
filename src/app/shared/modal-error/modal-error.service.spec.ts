import { ModalErrorService } from './modal-error.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ErrorContent } from './model/error-content.model';
import { ModalErrorComponent } from './modal-error.component';

describe('ModalErrorService', () => {
  let service: ModalErrorService;
  let modalService: NgbModal;

  beforeEach(() => {
    modalService = {
      open: () => void 0,
    } as unknown as NgbModal;
    service = new ModalErrorService(modalService);
  });

  describe('open', () => {
    beforeEach(() => {
      jest.spyOn(modalService, 'open').mockReturnValue(mockModalRef());
    });

    test('should open modal error', () => {
      service.open(new ErrorContent());

      expect(modalService.open).toBeCalledWith(ModalErrorComponent);
    });

    test('should assign data to modal', () => {
      const modalRef = mockModalRef();
      jest.spyOn(modalService, 'open').mockReturnValue(modalRef);
      const errorContent = new ErrorContent();

      service.open(errorContent);

      expect(modalRef.componentInstance.data).toBe(errorContent);
    });

    function mockModalRef(): NgbModalRef {
      return { componentInstance: { data: {} } } as unknown as NgbModalRef;
    }
  });
});
