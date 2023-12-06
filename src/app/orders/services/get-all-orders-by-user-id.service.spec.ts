import { TestBed } from '@angular/core/testing';

import { GetAllOrdersByUserIdService } from './get-all-orders-by-user-id.service';

describe('GetAllOrdersByUserIdService', () => {
  let service: GetAllOrdersByUserIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllOrdersByUserIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
