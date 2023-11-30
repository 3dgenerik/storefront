import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../../models/Product';
import { HttpClient } from '@angular/common/http';
import { PRODUCTS, ROOT_URL } from '../../constants/constants';

@Injectable({
    providedIn: 'root',
})
export class GetProductByIdService {
    constructor(private http: HttpClient) {}

    getProductById(id: number): Observable<Product> {
        const data = this.http.get<Product>(`${ROOT_URL}${PRODUCTS}/${id}`);
        return data.pipe(
            catchError((error) => {
                return throwError(() => 'Error occurd while fetching product');
            }),
        );
    }
}
