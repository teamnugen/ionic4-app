import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicSelectablePage } from './ionic-selectable.page';

describe('IonicSelectablePage', () => {
  let component: IonicSelectablePage;
  let fixture: ComponentFixture<IonicSelectablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicSelectablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicSelectablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
