import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninRegisterNavigationComponent } from './signin-register-navigation.component';

describe('SigninRegisterNavigationComponent', () => {
    let component: SigninRegisterNavigationComponent;
    let fixture: ComponentFixture<SigninRegisterNavigationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SigninRegisterNavigationComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SigninRegisterNavigationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
