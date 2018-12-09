import { TestBed } from '@angular/core/testing';

import { GetVendorsService } from './get-vendors.service';

describe('GetVendorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetVendorsService = TestBed.get(GetVendorsService);
    expect(service).toBeTruthy();
  });
});
