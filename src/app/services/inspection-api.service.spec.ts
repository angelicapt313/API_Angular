import { TestBed } from '@angular/core/testing';

import { InspectionAPIService } from './inspection-api.service';

describe('InspectionAPIService', () => {
  let service: InspectionAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspectionAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
