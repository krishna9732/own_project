import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpgenerateComponent } from './otpgenerate.component';

describe('OtpgenerateComponent', () => {
  let component: OtpgenerateComponent;
  let fixture: ComponentFixture<OtpgenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpgenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
