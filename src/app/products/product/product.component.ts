import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { QuantityService } from '../services/quantity.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
    @Input() product: Product = new Product();
    @Input() token: ISignInRegisterUser | null;
    @Input() layout: string = '';

    quantity: number = 1;

    constructor(
        private tokenStorageService: TokenStorageService,
        private router: Router,
        private quantityService: QuantityService,
    ) {
        this.token = JSON.parse(tokenStorageService.getToken('token') || 'null');
    }

    ngOnInit(): void {
        // this.quantityService.quantity$.subscribe((quantity)=>{
        //     this.quantity = quantity
        // })
    }

    getQuantity(quantity: number): void {
        this.quantity = quantity;
    }

    toProductDetails(product: Product): void {
        this.router.navigate(['/product-details', product.id]);
    }
}
