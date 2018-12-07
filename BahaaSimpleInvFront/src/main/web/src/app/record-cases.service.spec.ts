import { TestBed } from '@angular/core/testing';

import { RecordCasesService } from './record-cases.service';

describe('RecordCasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecordCasesService = TestBed.get(RecordCasesService);
    expect(service).toBeTruthy();
  });
});
