import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StopWatch } from './stop-watch';

describe('StopWatch', () => {
  let component: StopWatch;
  let fixture: ComponentFixture<StopWatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StopWatch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StopWatch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
