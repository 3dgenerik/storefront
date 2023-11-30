import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../services/get-products.service';
import { Product } from '../../models/Product';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { ISignInRegisterUser } from '../../interfaces/interfaces';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    tempProducts: Product[] = [];
    errorMessage: string = '';
    hasError: boolean = false;
    token: ISignInRegisterUser | null;

    constructor(
        private getProductsService: GetProductsService,
        private tokenStorageService: TokenStorageService,
    ) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null');
    }

    ngOnInit(): void {
        this.getProductsService.getProducts().subscribe({
            next: (response) => {
                this.products = response;
                this.tempProducts = response;
                this.hasError = false;
            },
            error: (error) => {
                this.hasError = true;
                this.errorMessage = error;
            },
        });
    }

    getCategory(category: string): void {
        if (category !== 'all') {
            this.products = this.tempProducts.filter((productItem: Product) => {
                return productItem.category === category;
            });
        } else {
            this.products = this.tempProducts;
        }
    }
}
