import { TestBed, inject } from '@angular/core/testing';

import { UmzugsmeldungService } from './umzugsmeldung.service';

describe('UmzugsmeldungService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UmzugsmeldungService]
    });
  });

  it('should be created', inject([UmzugsmeldungService], (service: UmzugsmeldungService) => {
    expect(service).toBeTruthy();
  }));
});
