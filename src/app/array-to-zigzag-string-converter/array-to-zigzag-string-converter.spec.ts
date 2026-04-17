import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayToZigzagStringConverter } from './array-to-zigzag-string-converter';

describe('ArrayToZigzagStringConverter', () => {
  let component: ArrayToZigzagStringConverter;
  let fixture: ComponentFixture<ArrayToZigzagStringConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayToZigzagStringConverter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayToZigzagStringConverter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
