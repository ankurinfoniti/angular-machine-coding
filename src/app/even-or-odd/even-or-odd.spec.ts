import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenOrOdd } from './even-or-odd';

describe('EvenOrOdd', () => {
  let component: EvenOrOdd;
  let fixture: ComponentFixture<EvenOrOdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvenOrOdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvenOrOdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
