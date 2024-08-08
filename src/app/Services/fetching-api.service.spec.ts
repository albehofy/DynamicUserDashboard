import { TestBed } from '@angular/core/testing';

import { FetchingAPIService } from './fetching-api.service';

describe('FetchingAPIService', () => {
  let service: FetchingAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchingAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
