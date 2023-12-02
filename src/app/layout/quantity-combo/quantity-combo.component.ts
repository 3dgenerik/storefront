import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { NumberFactory } from '../../utils/numberFactory';
import { QuantityService } from '../../products/services/quantity.service';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { Product } from '../../models/Product';
import { ISignInRegisterUser } from '../../interfaces/interfaces';

@Component({
    selector: 'app-quantity-combo',
    templateUrl: './quantity-combo.component.html',
    styleUrl: './quantity-combo.component.css',
})
export class QuantityComboComponent {
    selectedQuantity: number = 1;
    optionNumbers: number[] = NumberFactory.getArrayOfNElements(10);
    token: ISignInRegisterUser;
    @Output() getQuantityProp: EventEmitter<number> = new EventEmitter();
    @Input() product: Product = new Product();

    constructor(
        private quantityService: QuantityService,
        private tokenStorageService: TokenStorageService,
    ) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null') as ISignInRegisterUser

    }

    getQuantityEmit(): void {
        this.getQuantityProp.emit(this.selectedQuantity);
    }

    addToChart():void{
        console.log(this.token);
        // console.log(Number(this.product.price) * this.selectedQuantity);
    }
    // updateQuantity(): void {
    //     this.quantityService.updateQuantity(this.selectedQuantity)
    // }
}
