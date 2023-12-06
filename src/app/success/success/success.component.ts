import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ISignInRegisterUser, ISuccessData } from '../../interfaces/interfaces';
import { Order } from '../../models/Order';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html',
    styleUrl: './success.component.css',
})
export class SuccessComponent implements OnInit {
    firstName: string = '';
    lastName: string = '';
    totalPrice: number = 0;
    timestampDate: string = '';
    timeStampTime: string = '';
    orderId: number = 0;
    token: ISignInRegisterUser;
    isInvalid: boolean = false;

    constructor(
        private routerActivation: ActivatedRoute,
        private router: Router,
        private tokenStorageService: TokenStorageService,
        private location: Location
    ) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null');
    }

    ngOnInit(): void {
      if(this.token){
          this.isInvalid = false;
          this.routerActivation.queryParams.subscribe((params) => {
              (this.firstName = params['firstName']),
                  (this.lastName = params['lastName']),
                  (this.totalPrice = params['totalPrice']),
                  (this.timestampDate = `${new Date(params['timestamp']).toDateString()}`),
                  (this.timeStampTime = `${new Date(params['timestamp']).toLocaleTimeString()}`),
                  (this.orderId = params['orderId']);
                  //Invalid Date
                  if(!this.lastName || !this.firstName 
                    || !this.totalPrice || !this.orderId 
                    || this.timestampDate === 'Invalid Date'
                    || this.timeStampTime === 'Invalid Date'
                    ){
                      this.isInvalid = true;
                    }
          });

      }else{
        this.resetUrl()
      }
    }

    backToProducts(): void {
        this.router.navigate(['/']);
    }

    resetUrl(): void {
        this.location.go('/success');
    }
}
