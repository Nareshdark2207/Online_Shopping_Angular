import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSmComponent } from './filter-sm.component';

describe('FilterSmComponent', () => {
  let component: FilterSmComponent;
  let fixture: ComponentFixture<FilterSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
