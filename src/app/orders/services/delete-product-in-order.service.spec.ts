import { TestBed } from '@angular/core/testing';

import { DeleteProductInOrderService } from './delete-product-in-order.service';

describe('DeleteProductInOrderService', () => {
  let service: DeleteProductInOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteProductInOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
