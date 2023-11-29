import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../services/get-products.service';
import { Product } from '../../models/Product';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
    products: Product[] = [];
    tempProducts: Product[] = [];
    constructor(private getProductsService: GetProductsService) {}

    ngOnInit(): void {
        this.getProductsService.getProducts().subscribe((response) => {
            this.products = response;
            this.tempProducts = response;
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
