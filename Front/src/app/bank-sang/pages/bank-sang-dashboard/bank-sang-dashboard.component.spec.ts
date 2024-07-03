import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSangDashboardComponent } from './bank-sang-dashboard.component';

describe('BankSangDashboardComponent', () => {
  let component: BankSangDashboardComponent;
  let fixture: ComponentFixture<BankSangDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankSangDashboardComponent]
    });
    fixture = TestBed.createComponent(BankSangDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
