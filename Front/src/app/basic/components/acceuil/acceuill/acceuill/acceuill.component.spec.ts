import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuillComponent } from './acceuill.component';

describe('AcceuillComponent', () => {
  let component: AcceuillComponent;
  let fixture: ComponentFixture<AcceuillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuillComponent]
    });
    fixture = TestBed.createComponent(AcceuillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
