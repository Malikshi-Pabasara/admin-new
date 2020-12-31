import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpareshopListComponent } from './spareshop-list.component';

describe('SpareshopListComponent', () => {
  let component: SpareshopListComponent;
  let fixture: ComponentFixture<SpareshopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpareshopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpareshopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
