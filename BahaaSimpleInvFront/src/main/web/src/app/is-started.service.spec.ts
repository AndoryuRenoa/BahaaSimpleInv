import { TestBed } from '@angular/core/testing';

import { IsStartedService } from './is-started.service';

describe('IsStartedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsStartedService = TestBed.get(IsStartedService);
    expect(service).toBeTruthy();
  });
});
