import { TestBed } from '@angular/core/testing';

import { GetAllProductsInOrdersService } from './get-all-products-in-orders.service';

describe('GetAllProductsInOrdersService', () => {
    let service: GetAllProductsInOrdersService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GetAllProductsInOrdersService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
