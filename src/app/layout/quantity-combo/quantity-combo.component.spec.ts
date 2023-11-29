import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityComboComponent } from './quantity-combo.component';

describe('QuantityComboComponent', () => {
    let component: QuantityComboComponent;
    let fixture: ComponentFixture<QuantityComboComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [QuantityComboComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(QuantityComboComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
