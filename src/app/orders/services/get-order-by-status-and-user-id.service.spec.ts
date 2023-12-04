import { TestBed } from '@angular/core/testing';

import { GetOrderByStatusAndUserIdService } from './get-order-by-status-and-user-id.service';

describe('GetOrderByStatusAndUserIdService', () => {
    let service: GetOrderByStatusAndUserIdService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(GetOrderByStatusAndUserIdService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
