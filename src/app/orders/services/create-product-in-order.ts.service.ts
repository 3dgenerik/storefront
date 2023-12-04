import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductInOrder } from '../../models/ProductInOrder';
import { HeadersService } from '../../services/headers.service';
import { ORDERS, PRODUCTS, ROOT_URL } from '../../constants/constants';

@Injectable({
    providedIn: 'root',
})
export class CreateProductInOrderTsService {
    constructor(
        private http: HttpClient,
        private headersService: HeadersService,
    ) {}

    createProductInOrder(productInOrder: ProductInOrder): Observable<ProductInOrder> {
        const headers = this.headersService.headers();

        const addProductInOrder: ProductInOrder = {
            quantity: productInOrder.quantity,
            product_id: productInOrder.product_id,
            order_id: productInOrder.order_id,
        };

        const data = this.http.post<ProductInOrder>(`${ROOT_URL}${ORDERS}/${PRODUCTS}/create`, addProductInOrder, {
            headers,
        });
        return data.pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
        );
    }
}
