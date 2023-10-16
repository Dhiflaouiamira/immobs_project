import { TestBed } from '@angular/core/testing';

import { ImmmobServiceService } from './immmob-service.service';

describe('ImmmobServiceService', () => {
  let service: ImmmobServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmmobServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
