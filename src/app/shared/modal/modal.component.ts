import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() size?: string = 'md';
  @Input() title?: string = 'Modal title';

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  onClose(): void {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  onSubmit(): void {
    this.elementRef.nativeElement.remove();
    this.submitEvent.emit();
  }
}
