import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratiomnComponent } from './registratiomn.component';

describe('RegistratiomnComponent', () => {
  let component: RegistratiomnComponent;
  let fixture: ComponentFixture<RegistratiomnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratiomnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratiomnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
