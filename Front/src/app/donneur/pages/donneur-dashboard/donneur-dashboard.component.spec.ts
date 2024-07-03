import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneurDashboardComponent } from './donneur-dashboard.component';

describe('DonneurDashboardComponent', () => {
  let component: DonneurDashboardComponent;
  let fixture: ComponentFixture<DonneurDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonneurDashboardComponent]
    });
    fixture = TestBed.createComponent(DonneurDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
