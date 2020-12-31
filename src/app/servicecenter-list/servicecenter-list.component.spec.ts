import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecenterListComponent } from './servicecenter-list.component';

describe('ServicecenterListComponent', () => {
  let component: ServicecenterListComponent;
  let fixture: ComponentFixture<ServicecenterListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecenterListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
