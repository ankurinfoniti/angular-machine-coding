import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterRecipes } from './filter-recipes';

describe('FilterRecipes', () => {
  let component: FilterRecipes;
  let fixture: ComponentFixture<FilterRecipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterRecipes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterRecipes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
