import { TestBed } from '@angular/core/testing';

import { IsReceivingStartedService } from './is-receiving-started.service';

describe('IsReceivingStartedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsReceivingStartedService = TestBed.get(IsReceivingStartedService);
    expect(service).toBeTruthy();
  });
});
