import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressSeeallComponent } from './address-seeall.component';

describe('AddressSeeallComponent', () => {
  let component: AddressSeeallComponent;
  let fixture: ComponentFixture<AddressSeeallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressSeeallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressSeeallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
