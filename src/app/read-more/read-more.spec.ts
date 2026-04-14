import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMore } from './read-more';

describe('ReadMore', () => {
  let component: ReadMore;
  let fixture: ComponentFixture<ReadMore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadMore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadMore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
