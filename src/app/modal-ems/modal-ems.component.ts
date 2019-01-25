import { Component, ChangeDetectionStrategy, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fs-generic-modal-ems',
  templateUrl: './modal-ems.component.html',
  styleUrls: ['./modal-ems.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalEmsComponent implements OnChanges {

  @Input() time = '00:22';
  @Input() light = false;
  @Output() closed = new EventEmitter<{ data: any }>();

  selectedInd = 0;

  data = [
    { name: 'NW7-ALS-3', what: 'Trauma', time: '00:22', num: 1 },
    { name: 'NW7-ALS-7', what: 'Stroke', time: '00:14', num: 1 },
    { name: 'SE0-BLS-5', what: 'Other', time: '00:02', num: 4  },
    { name: 'SE1-ALS-3', what: 'Other', time: '', num: null },
  ];

  constructor() { }

  ngOnChanges() {
    this.data[0].time = this.time;
  }

  onSelect(i) {
    if (i <= 1) {
      this.selectedInd = i;
      this.closed.emit({ data: this.data[i] });
    }
  }

  close() {
    this.closed.emit();
  }

}
