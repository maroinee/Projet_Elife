import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSangComponent } from './bank-sang.component';

describe('BankSangComponent', () => {
  let component: BankSangComponent;
  let fixture: ComponentFixture<BankSangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankSangComponent]
    });
    fixture = TestBed.createComponent(BankSangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
