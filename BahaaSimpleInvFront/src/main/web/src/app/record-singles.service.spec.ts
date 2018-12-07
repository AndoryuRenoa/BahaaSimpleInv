import { TestBed } from '@angular/core/testing';

import { RecordSinglesService } from './record-singles.service';

describe('RecordSinglesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordSinglesService = TestBed.get(RecordSinglesService);
    expect(service).toBeTruthy();
  });
});
