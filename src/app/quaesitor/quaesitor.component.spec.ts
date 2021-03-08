import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { QuaesitorComponent } from './quaesitor.component';

describe('QuaesitorComponent', () => {
  let component: QuaesitorComponent;
  let fixture: ComponentFixture<QuaesitorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuaesitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuaesitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
