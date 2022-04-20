import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuoteDisplayComponent } from './my-quote-display.component';

describe('MyQuoteDisplayComponent', () => {
  let component: MyQuoteDisplayComponent;
  let fixture: ComponentFixture<MyQuoteDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyQuoteDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuoteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
