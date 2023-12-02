import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../../models/Product';
import { PRODUCTS, ROOT_URL } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    const data = this.http.get<Product[]>(`${ROOT_URL}${PRODUCTS}`)
    return data.pipe(
      catchError((error) => {
          return throwError(() => `Error while getting products`);
      }),
  );
  }
}
