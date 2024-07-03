import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupHopitalComponent } from './signup-hopital.component';

describe('SignupHopitalComponent', () => {
  let component: SignupHopitalComponent;
  let fixture: ComponentFixture<SignupHopitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupHopitalComponent]
    });
    fixture = TestBed.createComponent(SignupHopitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
