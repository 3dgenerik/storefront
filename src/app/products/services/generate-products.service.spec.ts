import { TestBed } from '@angular/core/testing';

import { GenerateProductsService } from './generate-products.service';

describe('GenerateProductsService', () => {
  let service: GenerateProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
