import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalErComponent } from './modal-er.component';

describe('ModalErComponent', () => {
  let component: ModalErComponent;
  let fixture: ComponentFixture<ModalErComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalErComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
