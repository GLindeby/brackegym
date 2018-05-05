import { TestBed, inject } from '@angular/core/testing';

import { FeedserviceService } from './feedservice.service';

describe('FeedserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedserviceService]
    });
  });

  it('should be created', inject([FeedserviceService], (service: FeedserviceService) => {
    expect(service).toBeTruthy();
  }));
});
