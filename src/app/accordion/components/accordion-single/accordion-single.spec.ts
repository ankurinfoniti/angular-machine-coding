import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionSingle } from './accordion-single';

describe('AccordionSingle', () => {
  let component: AccordionSingle;
  let fixture: ComponentFixture<AccordionSingle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionSingle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionSingle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
