import { Component, Input, OnInit } from '@angular/core';
import { ProductInOrder } from '../../models/ProductInOrder';
import { GetProductByIdService } from '../../products/services/get-product-by-id.service';
import { Product } from '../../models/Product';
import { DeleteProductInOrderService } from '../../orders/services/delete-product-in-order.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
    @Input() cart: ProductInOrder = new ProductInOrder();
    product: Product = new Product();
    // @Input() productsInOrdner: ProductInOrder[] = [];

    constructor(
        private getProductByIdService: GetProductByIdService,
        private deleteProductInOrderService: DeleteProductInOrderService,
    ) {}

    ngOnInit(): void {
        this.getProductByIdService.getProductById(this.cart.product_id).subscribe({
            next: (response) => {
                this.product = response;
            },
            error: (error) => {
                console.log(error.error.text);
            },
        });
    }

    deleteProductsInOrder():void{
      console.log(Number(this.cart.order_id),  Number(this.product.id));
      this.deleteProductInOrderService.deleteProductInOrder(Number(this.cart.order_id), Number(this.product.id)).subscribe({
        next:(response)=>{
          console.log(`Product deleted`);
        },
        error:(error)=>{
          console.log(error.error);
        }
      })
    }
  }
