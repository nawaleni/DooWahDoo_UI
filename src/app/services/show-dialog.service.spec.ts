import { TestBed } from '@angular/core/testing';

import { ShowDialogService } from './show-dialog.service';

describe('ShowDialogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowDialogService = TestBed.get(ShowDialogService);
    expect(service).toBeTruthy();
  });
});
