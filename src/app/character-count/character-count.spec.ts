import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCount } from './character-count';

describe('CharacterCount', () => {
  let component: CharacterCount;
  let fixture: ComponentFixture<CharacterCount>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCount]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCount);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
