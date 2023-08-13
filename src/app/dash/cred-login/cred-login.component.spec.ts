import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredLoginComponent } from './cred-login.component';

describe('CredLoginComponent', () => {
  let component: CredLoginComponent;
  let fixture: ComponentFixture<CredLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
