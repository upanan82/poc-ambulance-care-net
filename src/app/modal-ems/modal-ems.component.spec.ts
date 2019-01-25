import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEmsComponent } from './modal-ems.component';

describe('ModalEmsComponent', () => {
  let component: ModalEmsComponent;
  let fixture: ComponentFixture<ModalEmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
