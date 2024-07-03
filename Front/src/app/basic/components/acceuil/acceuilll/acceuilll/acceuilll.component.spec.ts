import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilllComponent } from './acceuilll.component';

describe('AcceuilllComponent', () => {
  let component: AcceuilllComponent;
  let fixture: ComponentFixture<AcceuilllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilllComponent]
    });
    fixture = TestBed.createComponent(AcceuilllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
