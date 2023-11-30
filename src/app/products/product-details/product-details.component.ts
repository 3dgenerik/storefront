import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetProductByIdService } from '../services/get-product-by-id.service';
import { Product } from '../../models/Product';
import { QuantityService } from '../services/quantity.service';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { TokenStorageService } from '../../users/services/token-storage.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
    id: number = 0;
    error: string = '';
    product: Product = new Product();
    quantity: number = 1;
    token: ISignInRegisterUser | null;

    constructor(
        private router: Router,
        private routerActivation: ActivatedRoute,
        private getProductByIdService: GetProductByIdService,
        private quantityService: QuantityService,
        private tokenStorageService: TokenStorageService
    ) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null');
    }

    ngOnInit(): void {
        this.routerActivation.params.subscribe((params) => {
            this.id = params['id'] as number;
        });

        this.getProductByIdService.getProductById(this.id).subscribe({
            next: (response) => {
                this.product = response;
            },
            error: (error) => {
                this.error = error.error;
            },
        });

        // this.quantityService.quantity$.subscribe((quantity)=>{
        //   this.quantity = quantity;
        // })

        
    }

    
    getQuantity(quantity: number): void {
      this.quantity = quantity;
  }

    backToProducts(): void {
        this.router.navigate(['/']);
    }
}
