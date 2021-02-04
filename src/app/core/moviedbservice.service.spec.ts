import { TestBed } from '@angular/core/testing';

import { MoviedbService } from './moviedbservice.service';

describe('MoviedbService', () => {
  let service: MoviedbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviedbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
