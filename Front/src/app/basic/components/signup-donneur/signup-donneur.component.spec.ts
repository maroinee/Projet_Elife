import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDonneurComponent } from './signup-donneur.component';

describe('SignupDonneurComponent', () => {
  let component: SignupDonneurComponent;
  let fixture: ComponentFixture<SignupDonneurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupDonneurComponent]
    });
    fixture = TestBed.createComponent(SignupDonneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
