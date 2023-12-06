import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GetOrderByStatusAndUserIdService } from '../../orders/services/get-order-by-status-and-user-id.service';
import { GetAllProductsInOrderByOrderIdService } from '../../products/services/get-all-products-in-order-by-order-id.service';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { IProductItems, ISignInRegisterUser } from '../../interfaces/interfaces';
import { Order } from '../../models/Order';
import { ProductInOrder } from '../../models/ProductInOrder';
import { RestartComponentService } from '../../services/restart-component.service';
import { GetProductByIdService } from '../../products/services/get-product-by-id.service';
import { Product } from '../../models/Product';
import { orderBy } from 'lodash';

@Component({
    selector: 'app-carts',
    templateUrl: './carts.component.html',
    styleUrl: './carts.component.css',
})
export class CartsComponent implements OnInit {
    token: ISignInRegisterUser;
    order: Order = new Order();
    productsInOrder: ProductInOrder[] = [];
    loading: boolean = false;
    productItems: IProductItems[] = [];
    message: string = 'Please sign in if you want to buy our products.';
    isSignedIn: boolean = false;
    totalSum: number = 0;
    totalQuantity: number = 0;

    constructor(
        private getOrdersByUserIdService: GetOrderByStatusAndUserIdService,
        private getAllProductsInOrderByOrderId: GetAllProductsInOrderByOrderIdService,
        private tokenStorageService: TokenStorageService,
        private restartComponentService: RestartComponentService,
        private getProductByIdService: GetProductByIdService,
        private cdr: ChangeDetectorRef,
    ) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null');
    }

    ngOnInit(): void {
        
        if (this.token) this.isSignedIn = true;
        else this.isSignedIn = false;
        this.getProductsInOrder();
        //observing and repaint this component
        this.restartComponentService.restarted$.subscribe(() => {
            this.getProductsInOrder();
            this.totalQuantity = 0;
        });

    }

    onCartItemQuantityChange(quantity: number): void {
        this.totalQuantity += Number(quantity);
        this.cdr.detectChanges();
    }

    getTotalSum(): void {
        this.totalSum = this.productItems.reduce((acc: number, current: IProductItems) => {
            return acc + Number(current.products.price) * current.productInOrder.quantity;
        }, 0);
    }

    getProductsItems(): void {
        this.productItems = [];
        for (const productInOrder of this.productsInOrder) {
            this.getProductByIdService.getProductById(productInOrder.product_id).subscribe({
                next: (response) => {
                    this.productItems.push({ products: response, productInOrder: productInOrder });
                },
                error: (error) => {
                    console.log(error.error.text);
                },
                complete: () => {
                    this.getTotalSum();
                },
            });
        }
    }

    getProductsInOrder(): void {
        if (this.token && this.token.output.user.id) {
            this.getOrdersByUserIdService.getOrderByStatusAndUserId(this.token.output.user.id).subscribe({
                next: (response) => {
                    this.order = response[0];
                },
                error: (error) => {
                    console.log(error.error.text);
                },
                complete: () => {
                    if (this.order?.id) {
                        this.loading = true;
                        this.getAllProductsInOrderByOrderId.getAllProductsInOrderByOrderId(this.order.id).subscribe({
                            next: (response) => {
                                this.productsInOrder = response;
                            },
                            error: (error) => {
                                console.log(error.error.text);
                            },
                            complete: () => {
                                this.loading = false;
                                this.getProductsItems();
                                
                            },
                        });
                    }
                },
            });
        }
    }
}
