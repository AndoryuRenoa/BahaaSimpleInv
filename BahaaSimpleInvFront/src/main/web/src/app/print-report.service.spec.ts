import { TestBed } from '@angular/core/testing';

import { PrintReportService } from './print-report.service';

describe('PrintReportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrintReportService = TestBed.get(PrintReportService);
    expect(service).toBeTruthy();
  });
});
