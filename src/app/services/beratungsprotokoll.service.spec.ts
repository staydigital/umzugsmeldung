import { TestBed, inject } from '@angular/core/testing';

import { BeratungsprotokollService } from './beratungsprotokoll.service';

describe('BeratungsprotokollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeratungsprotokollService]
    });
  });

  it('should be created', inject([BeratungsprotokollService], (service: BeratungsprotokollService) => {
    expect(service).toBeTruthy();
  }));
});
