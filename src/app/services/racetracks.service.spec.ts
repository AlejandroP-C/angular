import { TestBed } from '@angular/core/testing';

import { RacetracksService } from './racetracks.service';

describe('RacetracksService', () => {
  let service: RacetracksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacetracksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
