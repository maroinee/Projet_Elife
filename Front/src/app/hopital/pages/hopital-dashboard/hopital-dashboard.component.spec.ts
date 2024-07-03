import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopitalDashboardComponent } from './hopital-dashboard.component';

describe('HopitalDashboardComponent', () => {
  let component: HopitalDashboardComponent;
  let fixture: ComponentFixture<HopitalDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HopitalDashboardComponent]
    });
    fixture = TestBed.createComponent(HopitalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
