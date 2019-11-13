import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchGenrePage } from './search-genre.page';

describe('SearchGenrePage', () => {
  let component: SearchGenrePage;
  let fixture: ComponentFixture<SearchGenrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchGenrePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchGenrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
