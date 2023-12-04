import { TestBed } from '@angular/core/testing';

import { CreateProductInOrderTsService } from './create-product-in-order.ts.service';

describe('CreateProductInOrderTsService', () => {
    let service: CreateProductInOrderTsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CreateProductInOrderTsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
