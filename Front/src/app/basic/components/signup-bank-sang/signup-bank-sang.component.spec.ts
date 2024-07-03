import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBankSangComponent } from './signup-bank-sang.component';

describe('SignupBankSangComponent', () => {
  let component: SignupBankSangComponent;
  let fixture: ComponentFixture<SignupBankSangComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupBankSangComponent]
    });
    fixture = TestBed.createComponent(SignupBankSangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
