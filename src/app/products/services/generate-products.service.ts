import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../../models/Product';
import { PRODUCTS, ROOT_URL } from '../../constants/constants';

@Injectable({
    providedIn: 'root',
})
export class GenerateProductsService {
    constructor(private http: HttpClient) {}

    getenerateProducts(): Observable<string> {
        const data = this.http.post<string>(`${ROOT_URL}${PRODUCTS}/create-random-products`, '');
        return data.pipe(
            catchError((error) => {
                return throwError(() => error);
            }),
        );
    }
}
