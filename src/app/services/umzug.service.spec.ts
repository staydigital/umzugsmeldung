import { TestBed, inject } from '@angular/core/testing';

import { UmzugService } from './umzug.service';

describe('UmzugService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UmzugService]
    });
  });

  it('should be created', inject([UmzugService], (service: UmzugService) => {
    expect(service).toBeTruthy();
  }));
});
