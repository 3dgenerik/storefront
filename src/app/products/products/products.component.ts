import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../services/get-products.service';
import { Product } from '../../models/Product';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { GenerateProductsService } from '../services/generate-products.service';
import { GetAllProductsService } from '../services/get-all-products.service';
import { HttpErrorResponse } from '@angular/common/http';

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
        private generateProductsService: GenerateProductsService,
        private getAllProductsService: GetAllProductsService,
    ) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null');
    }

    ngOnInit(): void {
        this.getAllProductsService.getAllProducts().subscribe({
            next: (allProducts) => {
                if (allProducts.length === 0) {
                    this.generateProductsService.getenerateProducts().subscribe({
                        error: (error) => {
                            if (error instanceof HttpErrorResponse) {
                                console.log(error.error.text);
                            }
                        },
                    });
                }
            },
            error: (error) => {
                this.hasError = true;
                this.errorMessage = `${error}. Maybe server problem.`;
            },
            complete: () => {
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
