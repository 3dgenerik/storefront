import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit {
    @Input() product: Product = new Product();
    quantity: number = 1;
    constructor() {}

    ngOnInit(): void {}

    getQuantity(quantity: number): void {
        this.quantity = quantity;
    }
}
