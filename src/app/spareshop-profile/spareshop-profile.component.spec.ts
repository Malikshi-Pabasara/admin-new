import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareshopProfileComponent } from './spareshop-profile.component';

describe('SpareshopProfileComponent', () => {
  let component: SpareshopProfileComponent;
  let fixture: ComponentFixture<SpareshopProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareshopProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareshopProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
