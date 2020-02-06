import { TestBed, inject } from '@angular/core/testing';

import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

describe('UserNotTaken.ValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNotTakenValidatorService]
    });
  });

  it('should be created', inject([UserNotTakenValidatorService], (service: UserNotTakenValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
