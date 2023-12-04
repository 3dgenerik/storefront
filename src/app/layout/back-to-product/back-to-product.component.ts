import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-back-to-product',
    templateUrl: './back-to-product.component.html',
    styleUrl: './back-to-product.component.css',
})
export class BackToProductComponent {
    constructor(private router: Router) {}

    backToProducts(): void {
        this.router.navigate(['/']);
    }
}
