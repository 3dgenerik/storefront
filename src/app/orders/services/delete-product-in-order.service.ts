import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductInOrder } from '../../models/ProductInOrder';
import { ORDERS, PRODUCTS, ROOT_URL } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductInOrderService {


  constructor(private http: HttpClient) { }

  deleteProductInOrder(orderId: number, productId: number):Observable<ProductInOrder>{
    const data = this.http.delete<ProductInOrder>(`${ROOT_URL}${ORDERS}/${orderId}/${PRODUCTS}/${productId}`)
    return data.pipe(catchError((error)=>{
      return throwError(()=>error)
    }))
  }
}
