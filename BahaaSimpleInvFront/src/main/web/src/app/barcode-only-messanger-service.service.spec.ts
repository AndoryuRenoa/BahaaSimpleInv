import { TestBed } from '@angular/core/testing';

import { BarcodeOnlyMessangerServiceService } from './barcode-only-messanger-service.service';

describe('BarcodeOnlyMessangerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BarcodeOnlyMessangerServiceService = TestBed.get(BarcodeOnlyMessangerServiceService);
    expect(service).toBeTruthy();
  });
});
