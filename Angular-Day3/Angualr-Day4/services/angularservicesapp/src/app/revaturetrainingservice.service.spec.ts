import { TestBed } from '@angular/core/testing';

import { RevaturetrainingserviceService } from './revaturetrainingservice.service';

describe('RevaturetrainingserviceService', () => {
  let service: RevaturetrainingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevaturetrainingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
