import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductInOrder } from '../../models/ProductInOrder';
import { GetProductByIdService } from '../../products/services/get-product-by-id.service';
import { Product } from '../../models/Product';
import { DeleteProductInOrderService } from '../../orders/services/delete-product-in-order.service';
import { RestartComponentService } from '../../services/restart-component.service';
import { IProductItems } from '../../interfaces/interfaces';
import { NumberFactory } from '../../utils/numberFactory';
import { TokenStorageService } from '../../users/services/token-storage.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
    // @Input() cart: ProductInOrder = new ProductInOrder();
    selectedQuantity: number = 1;
    optionNumbers: number[] = NumberFactory.getArrayOfNElements(10);
    @Input() productItem: IProductItems = { products: new Product(), productInOrder: new ProductInOrder() };
    @Output() selectedQuantityChange: EventEmitter<number> = new EventEmitter();
    // @Input() productsInOrdner: ProductInOrder[] = [];

    constructor(
        private getProductByIdService: GetProductByIdService,
        private deleteProductInOrderService: DeleteProductInOrderService,
        private restartComponentService: RestartComponentService,
        private tokenStorageService: TokenStorageService,
    ) {}

    ngOnInit(): void {
        this.selectedQuantity =
            Number(this.tokenStorageService.getToken(`${this.productItem.productInOrder.order_id}${this.productItem.products.name}`)) ||
            this.productItem.productInOrder.quantity;
        this.emitQuantityChange();
    }

    onQuantityChange(): void {
      this.emitQuantityChange();
      this.tokenStorageService.saveToken(`${this.productItem.productInOrder.order_id}${this.productItem.products.name}`, this.selectedQuantity.toString());
      this.restartComponentService.restartUpdate();
    }

    private emitQuantityChange(): void {
        this.selectedQuantityChange.emit(this.selectedQuantity * Number(this.productItem.products.price));
    }

    deleteProductsInOrder(): void {
        this.tokenStorageService.removeToken(`${this.productItem.productInOrder.order_id}${this.productItem.products.name}`);
        this.deleteProductInOrderService
            .deleteProductInOrder(
                Number(this.productItem.productInOrder.order_id),
                Number(this.productItem.products.id),
            )
            .subscribe({
                next: () => {
                    this.restartComponentService.restartUpdate();
                },
                error: (error) => {
                    console.log(error.error);
                },
            });
    }
}
