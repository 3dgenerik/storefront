import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarWrapperComponent } from './nav-bar-wrapper.component';

describe('NavBarWrapperComponent', () => {
    let component: NavBarWrapperComponent;
    let fixture: ComponentFixture<NavBarWrapperComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavBarWrapperComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NavBarWrapperComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
