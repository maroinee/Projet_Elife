import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlComponent } from './view-al.component';

describe('ViewAlComponent', () => {
  let component: ViewAlComponent;
  let fixture: ComponentFixture<ViewAlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAlComponent]
    });
    fixture = TestBed.createComponent(ViewAlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
