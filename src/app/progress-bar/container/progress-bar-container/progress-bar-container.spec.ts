import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarContainer } from './progress-bar-container';

describe('ProgressBarContainer', () => {
  let component: ProgressBarContainer;
  let fixture: ComponentFixture<ProgressBarContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressBarContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
