import { Component, OnInit } from '@angular/core';
import { GetOrderByStatusAndUserIdService } from '../../orders/services/get-order-by-status-and-user-id.service';
import { GetAllProductsInOrderByOrderIdService } from '../../products/services/get-all-products-in-order-by-order-id.service';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { Order } from '../../models/Order';
import { ProductInOrder } from '../../models/ProductInOrder';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent implements OnInit{

  token: ISignInRegisterUser;
  order: Order = new Order();
  productsInOrder: ProductInOrder [] = [];
  loading: boolean = false;

  constructor(
    private getOrdersByUserIdService: GetOrderByStatusAndUserIdService,
    private getAllProductsInOrderByOrderId: GetAllProductsInOrderByOrderIdService,
    private tokenStorageService: TokenStorageService
  ){

    this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null')
  }

  ngOnInit(): void {

    if(this.token.output.user.id){
      this.getOrdersByUserIdService.getOrderByStatusAndUserId(this.token.output.user.id).subscribe({
        next: (response)=>{
          this.order = response[0];
        },
        error: (error)=>{
          console.log(error.error.text);
        },
        complete:()=>{
          if(this.order.id){
            this.loading = true;
            this.getAllProductsInOrderByOrderId.getAllProductsInOrderByOrderId(this.order.id).subscribe({
              next: (response)=>{
                this.productsInOrder = response;
              },
              error: (error)=>{
                console.log(error.error.text);
              },
              complete:()=>{
                this.loading = false;
              }
            })
          }
        }
      })
    }

    
  }

}
