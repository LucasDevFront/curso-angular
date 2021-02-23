import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormumComponent } from './formum.component';

describe('FormumComponent', () => {
  let component: FormumComponent;
  let fixture: ComponentFixture<FormumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
