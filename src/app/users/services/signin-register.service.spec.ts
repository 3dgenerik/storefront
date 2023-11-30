import { TestBed } from '@angular/core/testing';

import { SigninRegisterService } from './signin-register.service';

describe('SigninRegisterService', () => {
    let service: SigninRegisterService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SigninRegisterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
