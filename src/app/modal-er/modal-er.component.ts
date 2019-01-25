import { Component, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fs-generic-modal-er',
  templateUrl: './modal-er.component.html',
  styleUrls: ['./modal-er.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalErComponent {

  @Output() closed = new EventEmitter<{  }>();

  data = [
    { name: 'STEMI - 1', booked: false, img: '../../assets/img/heart.svg' },
    { name: 'STEMI - 2', booked: false, img: '../../assets/img/heart.svg' },
    { name: 'Stroke', booked: false, img: '../../assets/img/combined-shape.svg' },
    { name: 'Trauma - 1', booked: false, img: '../../assets/img/combined-shape-2.svg' },
    { name: 'Trauma - 2', booked: false, img: '../../assets/img/combined-shape-2.svg' },
    { name: 'General - 1', booked: false, img: '../../assets/img/plus.svg' },
    { name: 'General - 2', booked: false, img: '../../assets/img/plus.svg' },
  ];

  constructor() { }

  onSelect(id) {
    this.data[id].booked = !this.data[id].booked;
  }

  close() {
    this.closed.emit();
  }

}
