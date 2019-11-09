import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTitlePage } from './search-title.page';

describe('SearchTitlePage', () => {
  let component: SearchTitlePage;
  let fixture: ComponentFixture<SearchTitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTitlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
