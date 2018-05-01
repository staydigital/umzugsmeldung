import { TestBed, inject } from '@angular/core/testing';

import { VnService } from './vn.service';

describe('VnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VnService]
    });
  });

  it('should be created', inject([VnService], (service: VnService) => {
    expect(service).toBeTruthy();
  }));
});
