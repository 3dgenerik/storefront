import { TestBed } from '@angular/core/testing';

import { GetAllProductsInOrderByOrderIdService } from './get-all-products-in-order-by-order-id.service';

describe('GetAllProductsInOrderByOrderIdService', () => {
  let service: GetAllProductsInOrderByOrderIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllProductsInOrderByOrderIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
