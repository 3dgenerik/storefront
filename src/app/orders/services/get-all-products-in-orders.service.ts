import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductInOrder } from '../../models/ProductInOrder';
import { HeadersService } from '../../services/headers.service';
import { PRODUCTS_IN_ORDERS, ROOT_URL } from '../../constants/constants';

@Injectable({
    providedIn: 'root',
})
export class GetAllProductsInOrdersService {
    constructor(
        private http: HttpClient,
        private headersService: HeadersService,
    ) {}

    getAllProductsInOrders(): Observable<ProductInOrder[]> {
        const headers = this.headersService.headers();
        const data = this.http.get<ProductInOrder[]>(`${ROOT_URL}${PRODUCTS_IN_ORDERS}`, { headers });
        return data.pipe(
            catchError((error) => {
                return throwError(() => `Something went wrong.`);
            }),
        );
    }
}
