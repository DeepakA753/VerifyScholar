import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionLoginComponent } from './institution-login.component';

describe('InstitutionLoginComponent', () => {
  let component: InstitutionLoginComponent;
  let fixture: ComponentFixture<InstitutionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
