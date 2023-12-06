import { TestBed } from '@angular/core/testing';

import { DeletelAllProductsByOrderIdService } from './deletel-all-products-by-order-id.service';

describe('DeletelAllProductsByOrderIdService', () => {
  let service: DeletelAllProductsByOrderIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletelAllProductsByOrderIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
