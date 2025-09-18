import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSorter } from './list-sorter';

describe('ListSorter', () => {
  let component: ListSorter;
  let fixture: ComponentFixture<ListSorter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSorter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSorter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
