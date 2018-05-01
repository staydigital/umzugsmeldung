import { TestBed, inject } from '@angular/core/testing';

import { VertragService } from './vertrag.service';

describe('VertragService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VertragService]
    });
  });

  it('should be created', inject([VertragService], (service: VertragService) => {
    expect(service).toBeTruthy();
  }));
});
