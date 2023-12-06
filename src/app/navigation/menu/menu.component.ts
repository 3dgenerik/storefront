import { Component, OnInit } from '@angular/core';
import { GetOrderByStatusAndUserIdService } from '../../orders/services/get-order-by-status-and-user-id.service';
import { GetAllProductsInOrderByOrderIdService } from '../../products/services/get-all-products-in-order-by-order-id.service';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { Order } from '../../models/Order';
import { ProductInOrder } from '../../models/ProductInOrder';
import { RestartComponentService } from '../../services/restart-component.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  token: ISignInRegisterUser;
  order: Order = new Order();
  productsInOrder: ProductInOrder[] = [];

  constructor(
    private getOrderByStatusAndUserIdService: GetOrderByStatusAndUserIdService,
    private getAllProductsInOrderByOrderIdService: GetAllProductsInOrderByOrderIdService,
    private tokenStorageService: TokenStorageService,
    private restartComponentService: RestartComponentService
  ){
    this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null')
  }

  ngOnInit(): void {
    this.getProductsInOrder()
    this.restartComponentService.restarted$.subscribe(() => {
      this.getProductsInOrder()

    });
  }

  getProductsInOrder():void{
    if(this.token.output.user.id){
      this.getOrderByStatusAndUserIdService.getOrderByStatusAndUserId(this.token.output.user.id).subscribe({
        next:(response)=>{
          this.order = response[0];
        },
        error:(error)=>{
          return error
        },
        complete: () => {
          if (this.order?.id) {
              this.getAllProductsInOrderByOrderIdService.getAllProductsInOrderByOrderId(this.order.id).subscribe({
                  next: (response) => {
                      this.productsInOrder = response;
                  },
                  error: (error) => {
                      console.log(error.error.text);
                  }
              });
          }
      },
      })
    }
  }


}
