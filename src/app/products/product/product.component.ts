import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { ISignInRegisterUser } from '../../interfaces/interfaces';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
    @Input() product: Product = new Product();
    quantity: number = 1;
    token: ISignInRegisterUser | null;
    constructor(private tokenStorageService: TokenStorageService) {
        this.token = JSON.parse(tokenStorageService.getToken() || 'null')
    }

    ngOnInit(): void {}

    getQuantity(quantity: number): void {
        this.quantity = quantity;
    }
}
