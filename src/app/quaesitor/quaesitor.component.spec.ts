import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuaesitorComponent } from './quaesitor.component';

describe('QuaesitorComponent', () => {
  let component: QuaesitorComponent;
  let fixture: ComponentFixture<QuaesitorComponent>;

  beforeEach(async(() => {
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
