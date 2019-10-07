import { TestBed } from '@angular/core/testing';

import { QuaesitorService } from './quaesitor.service';

describe('QuaesitorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuaesitorService = TestBed.get(QuaesitorService);
    expect(service).toBeTruthy();
  });
});
