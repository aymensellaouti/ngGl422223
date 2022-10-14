import { TestBed } from '@angular/core/testing';

import { JokerService } from './joker.service';

describe('JokerService', () => {
  let service: JokerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
