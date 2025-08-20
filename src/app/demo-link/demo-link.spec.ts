import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLink } from './demo-link';

describe('DemoLink', () => {
  let component: DemoLink;
  let fixture: ComponentFixture<DemoLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
