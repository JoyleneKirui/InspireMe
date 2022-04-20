import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateostComponent } from './createost.component';

describe('CreateostComponent', () => {
  let component: CreateostComponent;
  let fixture: ComponentFixture<CreateostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
