import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { NumberFactory } from '../../utils/numberFactory';
import { QuantityService } from '../../products/services/quantity.service';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { Product } from '../../models/Product';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { GetOrderByStatusAndUserIdService } from '../../orders/services/get-order-by-status-and-user-id.service';
import { CreateOrderService } from '../../orders/services/create-order.service';
import { Order } from '../../models/Order';
import { CreateProductInOrderTsService } from '../../orders/services/create-product-in-order.ts.service';
import { ProductInOrder } from '../../models/ProductInOrder';
import { GetAllProductsInOrdersService } from '../../orders/services/get-all-products-in-orders.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-quantity-combo',
    templateUrl: './quantity-combo.component.html',
    styleUrl: './quantity-combo.component.css',
})
export class QuantityComboComponent implements OnInit {
    selectedQuantity: number = 1;
    optionNumbers: number[] = NumberFactory.getArrayOfNElements(10);
    token: ISignInRegisterUser;
    @Output() getQuantityProp: EventEmitter<number> = new EventEmitter();
    @Input() product: Product = new Product();
    order: Order = new Order();
    allProductsInOrders: ProductInOrder[] = [];
    private addToCartClickSubject = new Subject<void>();
    btnSelected: boolean = false;
    orderByStatus: Order = new Order();

    constructor(
        private quantityService: QuantityService,
        private tokenStorageService: TokenStorageService,
        private getOrderByStatusAndUserId: GetOrderByStatusAndUserIdService,
        private createOrderService: CreateOrderService,
        private createProductInOrderService: CreateProductInOrderTsService,
        private getAllProductsInOrdersService: GetAllProductsInOrdersService,
    ) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null') as ISignInRegisterUser;

        this.addToCartClickSubject.pipe(debounceTime(250)).subscribe(() => {
            this.addToCart();
        });
    }

    ngOnInit(): void {
        if (this.token.output.user.id) {
            this.getOrderByStatusAndUserId.getOrderByStatusAndUserId(this.token.output.user.id).subscribe({
                next: (response) => {
                    if (response.length !== 0) this.getAllProductsInOrder();
                    this.order = response[0];
                },
            });
        }
    }

    private getAllProductsInOrder(): void {
        this.getAllProductsInOrdersService.getAllProductsInOrders().subscribe({
            next: (response) => {
                this.allProductsInOrders = response;
            },
            error: (error) => {
                console.log(error);
            },
            complete: () => {
                this.btnSelected = this.isBtnSelected(this.order);
            },
        });
    }

    private isBtnSelected(order: Order): boolean {
        for (const productsInOrders of this.allProductsInOrders) {
            if (productsInOrders.product_id === this.product.id && productsInOrders.order_id === order.id) {
                return true;
            }
        }
        return false;
    }

    getQuantityEmit(): void {
        this.getQuantityProp.emit(this.selectedQuantity);
    }

    private addProduct(): void {
        const newProductInOrder: ProductInOrder = {
            quantity: this.selectedQuantity,
            product_id: this.product.id,
            order_id: this.order.id || 1,
        };
        this.createProductInOrderService.createProductInOrder(newProductInOrder).subscribe({
            next: () => {
                this.getAllProductsInOrder();
            },
            error: (error) => {
                console.log(error);
            },
        });
    }

    addToCartClick(): void {
        this.addToCartClickSubject.next();
    }

    private addToCart(): void {
        if (this.token.output.user.id) {
            this.getOrderByStatusAndUserId.getOrderByStatusAndUserId(this.token.output.user.id).subscribe({
                next: (response) => {
                    if (response.length === 0) {
                        this.createOrderService.createOrder().subscribe({
                            next: (res) => {
                                this.order = res;
                                this.addProduct();
                            },
                            error: (error) => {
                                console.log('ERROR: ', error);
                            },
                        });
                    } else {
                        this.order = response[0];
                        this.addProduct();
                    }
                },
                error: (error) => {
                    console.log(error);
                },
            });
        }
    }
}
