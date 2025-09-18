import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSorterContainer } from './list-sorter-container';

describe('ListSorterContainer', () => {
  let component: ListSorterContainer;
  let fixture: ComponentFixture<ListSorterContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSorterContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSorterContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
