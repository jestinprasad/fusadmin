import { TestBed } from '@angular/core/testing';

import { FusadminService } from './fusadmin.service';

describe('FusadminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FusadminService = TestBed.get(FusadminService);
    expect(service).toBeTruthy();
  });
});
