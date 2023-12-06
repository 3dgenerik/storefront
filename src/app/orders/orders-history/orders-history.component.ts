import { Component, OnInit } from '@angular/core';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { GetAllOrdersByUserIdService } from '../services/get-all-orders-by-user-id.service';
import { Order } from '../../models/Order';

@Component({
    selector: 'app-orders-history',
    templateUrl: './orders-history.component.html',
    styleUrl: './orders-history.component.css',
})
export class OrdersHistoryComponent implements OnInit {
    token: ISignInRegisterUser;
    orders: Order[] = [];
    orderMessage: string = '';

    constructor(
        private tokenStorageService: TokenStorageService,
        private getAllOrdersByUserIdService: GetAllOrdersByUserIdService,
    ) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null');
    }

    ngOnInit(): void {
      if(this.token?.output.user.id){
        this.getAllOrdersByUserIdService.getAllOrdersByUserId(this.token.output.user.id).subscribe({
          next:(response)=>{
            this.orders = response;
          },
          error:(error)=>{
            this.orderMessage = error.error.text;
          }
        })
      }
    }

    // getAllOrdersByUserId():void{

    // }
}
