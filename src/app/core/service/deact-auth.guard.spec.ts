import { TestBed } from '@angular/core/testing';

import { DeactAuthGuard } from './deact-auth.guard';

describe('DeactAuthGuard', () => {
  let guard: DeactAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
