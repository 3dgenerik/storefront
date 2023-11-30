import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { NumberFactory } from '../../utils/numberFactory';
import { QuantityService } from '../../products/services/quantity.service';
import { TokenStorageService } from '../../users/services/token-storage.service';

@Component({
    selector: 'app-quantity-combo',
    templateUrl: './quantity-combo.component.html',
    styleUrl: './quantity-combo.component.css',
})
export class QuantityComboComponent {
    selectedQuantity: number = 1;
    optionNumbers: number[] = NumberFactory.getArrayOfNElements(10);
    @Output() getQuantityProp: EventEmitter<number> = new EventEmitter();

    constructor(
        private quantityService: QuantityService,
        private tokenStorageService: TokenStorageService,
    ) {}

    getQuantityEmit(): void {
        this.getQuantityProp.emit(this.selectedQuantity);
    }

    // updateQuantity(): void {
    //     this.quantityService.updateQuantity(this.selectedQuantity)
    // }
}
