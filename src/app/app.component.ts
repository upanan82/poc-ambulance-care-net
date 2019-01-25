import { ChangeDetectionStrategy, Component, HostListener, ViewChild, ElementRef,
  OnInit, ChangeDetectorRef } from '@angular/core';
import Scenario from './scenarios';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'fs-generic-root',
  animations: [
    trigger('animationOption2', [
      state('open', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('close', style({
        transform: 'translate3d(400px, 0, 0)'
      })),
      transition('open => close', animate('300ms ease-in-out')),
      transition('close => open', animate('300ms ease-in-out'))
    ]),
    trigger('animationOption1', [
      state('open', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('close', style({
        transform: 'translate3d(-400px, 0, 0)'
      })),
      transition('open => close', animate('300ms ease-in-out')),
      transition('close => open', animate('300ms ease-in-out'))
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  @ViewChild('wrapper') wrapper: ElementRef;

  isModal = false;
  isShowS = false;
  t1: any;
  t2: any;
  t3: any;
  t4: any;
  modal = '';
  selectedNum = 1;
  wantCloseModal = false;
  scenarioS = [];
  scenario: any = {};
  bottomData: any = { name: 'NW7-ALS-3', what: 'Trauma', time: '00:22', num: 1 };

  constructor(private cdr: ChangeDetectorRef,
              private s: Scenario) { }

  ngOnInit() {
    this.scenario = this.s.map[0];
    this.scenarioS = this.s.map;

    this.timers();
  }

  timers() {
    this.t1 = setInterval(() => {
      if (this.scenario.hr.i + 1 >= this.scenario.hr.values.length) {
        this.scenario.hr.i = 0;
      } else {
        this.scenario.hr.i++;
      }
      this.cdr.detectChanges();
    }, this.scenario.hr.step);

    this.t2 = setInterval(() => {
      if (this.scenario.etco.i + 1 >= this.scenario.etco.values.length) {
        this.scenario.etco.i = 0;
      } else {
        this.scenario.etco.i++;
      }
      this.cdr.detectChanges();
    }, this.scenario.etco.step);

    this.t3 = setInterval(() => {
      if (this.scenario.spo.i + 1 >= this.scenario.spo.values.length) {
        this.scenario.spo.i = 0;
      } else {
        this.scenario.spo.i++;
      }
      this.cdr.detectChanges();
    }, this.scenario.spo.step);

    this.t4 = setInterval(() => {
      if (this.scenario.abp.i + 1 >= this.scenario.abp.values.length) {
        this.scenario.abp.i = 0;
      } else {
        this.scenario.abp.i++;
      }
      this.cdr.detectChanges();
    }, this.scenario.abp.step);
  }

  onChange(i) {
    if (i === null) {
      return;
    }
    this.scenario = this.s.map[i];
    this.isShowS = false;
    if (this.scenario.id === 7) {
      this.bottomData = { name: 'NW7-ALS-3', what: 'Trauma', time: '00:21', num: 1 };
    }
    if (this.scenario.id < 7) {
      this.bottomData = { name: 'NW7-ALS-3', what: 'Trauma', time: '00:22', num: 1 };
    }
    this.stopTimers();
    this.timers();
  }

  showS() {
    this.isShowS = !this.isShowS;
  }

  stopTimers() {
    clearInterval(this.t1);
    clearInterval(this.t2);
    clearInterval(this.t3);
    clearInterval(this.t4);
  }

  numChange(i) {
    this.selectedNum = +i;
    this.onChange(this.scenario.id === 2 && i === 2 ? 3 : this.scenario.id === 3 && i === 1 ? 2 : null);
  }

  refresh(i) {
    this.onChange(9);
    setTimeout(() => {
      this.onChange(i);
    }, 0);
  }

  select(name) {
    this.isModal = true;
    this.modal = name;
  }

  animDone() {
    if (this.wantCloseModal) {
      this.wantCloseModal = false;
      this.modal = null;
    }
  }

  @HostListener('document:click', ['$event', '$event.target']) onClick(event, targetElement) {
    if (targetElement && this.wrapper && targetElement === this.wrapper.nativeElement) {
      this.wantCloseModal = true;
      this.isModal = false;
    }
  }

  @HostListener('document:touchstart', ['$event', '$event.target']) onTouch(event, targetElement) {
    this.onClick(event, targetElement);
  }

  close(e) {
    this.wantCloseModal = true;
    this.isModal = false;
    if (e) {
      this.bottomData = e.data;
      if (e.data.name === 'NW7-ALS-7') {
        this.onChange(8);
      } else {
        this.onChange(7);
      }
    }
  }

}
