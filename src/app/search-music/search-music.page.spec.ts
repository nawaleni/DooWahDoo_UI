import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMusicPage } from './search-music.page';

describe('SearchMusicPage', () => {
  let component: SearchMusicPage;
  let fixture: ComponentFixture<SearchMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMusicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
