import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../models/Product';
import { PRODUCTS, ROOT_URL } from '../../constants/constants';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GetProductsService {
    constructor(private http: HttpClient) {}

    getProducts(): Observable<Product[]> {
        const data = this.http.get<Product[]>(`${ROOT_URL}${PRODUCTS}`);
        return data;
    }
}
