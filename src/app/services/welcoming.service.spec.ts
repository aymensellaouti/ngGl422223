import { TestBed } from '@angular/core/testing';

import { WelcomingService } from './welcoming.service';

describe('WelcomingService', () => {
  let service: WelcomingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
