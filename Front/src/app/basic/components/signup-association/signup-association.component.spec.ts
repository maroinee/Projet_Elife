import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAssociationComponent } from './signup-association.component';

describe('SignupAssociationComponent', () => {
  let component: SignupAssociationComponent;
  let fixture: ComponentFixture<SignupAssociationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupAssociationComponent]
    });
    fixture = TestBed.createComponent(SignupAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
