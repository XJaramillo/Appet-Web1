import { TestBed } from '@angular/core/testing';

import { SignoutGuard } from './signout.guard';

describe('SignoutGuard', () => {
  let guard: SignoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
