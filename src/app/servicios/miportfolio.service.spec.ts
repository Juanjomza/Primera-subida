import { TestBed } from '@angular/core/testing';

import { MiportfolioService } from './miportfolio.service';

describe('MiportfolioService', () => {
  let service: MiportfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiportfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
