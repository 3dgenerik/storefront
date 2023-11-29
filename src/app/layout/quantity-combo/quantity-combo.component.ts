import { Component, Output, EventEmitter } from '@angular/core';
import { NumberFactory } from '../../utils/numberFactory';

@Component({
    selector: 'app-quantity-combo',
    templateUrl: './quantity-combo.component.html',
    styleUrl: './quantity-combo.component.css',
})
export class QuantityComboComponent {
    selectedQuantity: number = 1;
    optionNumbers: number[] = NumberFactory.getArrayOfNElements(10);
    @Output() getQuantityProp: EventEmitter<number> = new EventEmitter();

    getQuantityEmit(): void {
        this.getQuantityProp.emit(this.selectedQuantity);
    }
}
