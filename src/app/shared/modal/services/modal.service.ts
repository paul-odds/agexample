import { DOCUMENT } from '@angular/common';
import {
  ComponentRef,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalComponent } from '../modal.component';

export type Content<T> = string | TemplateRef<T> | Type<T>;

@Injectable()
export class ModalService {
  viewContainerRef!: ViewContainerRef;

  private modalNotifier!: Subject<string>;

  constructor(
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  open(content: TemplateRef<any> | string, options?: { size?: string; title?: string }): Observable<string> {
    const modalComponent = this.openComponent(content);
    modalComponent.instance.size = options?.size;
    modalComponent.instance.title = options?.title;
    modalComponent.instance.closeEvent.subscribe(() => this.closeModal());
    modalComponent.instance.submitEvent.subscribe(() => this.submitModal());

    modalComponent.hostView.detectChanges();

    this.document.body.appendChild(modalComponent.location.nativeElement);
    this.modalNotifier = new Subject();
    return this.modalNotifier.asObservable();
  }

  closeModal() {
    this.modalNotifier.complete();
  }

  submitModal() {
    this.modalNotifier.next('confirm');
    this.closeModal();
  }

  openComponent<T>(content: Content<T>): ComponentRef<ModalComponent> {
    const ngContent = this.createNgContent(content);
    const options= {
      injector: this.injector,
      projectableNodes: ngContent,
    }
    return this.viewContainerRef.createComponent(ModalComponent, options);
  }

  createNgContent<T>(content: Content<T>) {
    if (typeof content === 'string') {
      const element = this.document.createElement('div');
      element.innerHTML = content;
      return [[element]];
    }
    if (content instanceof TemplateRef) {
      const viewRef = content.createEmbeddedView(content.elementRef.nativeElement);
      return [viewRef.rootNodes];
    }
    return [[]];
  }
}
