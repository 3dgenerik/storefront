import { TestBed } from '@angular/core/testing';

import { RestartComponentService } from './restart-component.service';

describe('RestartComponentService', () => {
  let service: RestartComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestartComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
