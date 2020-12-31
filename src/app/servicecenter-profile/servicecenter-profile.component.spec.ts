import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecenterProfileComponent } from './servicecenter-profile.component';

describe('ServicecenterProfileComponent', () => {
  let component: ServicecenterProfileComponent;
  let fixture: ComponentFixture<ServicecenterProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecenterProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecenterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
