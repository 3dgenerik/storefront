import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductInOrder } from '../../models/ProductInOrder';
import { ORDERS, PRODUCTS, ROOT_URL } from '../../constants/constants';
import { HeadersService } from '../../services/headers.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductInOrderService {


  constructor(private http: HttpClient, private headersService: HeadersService) { }

  deleteProductInOrder(orderId: number, productId: number):Observable<ProductInOrder>{
    const headers = this.headersService.headers()
    const data = this.http.delete<ProductInOrder>(`${ROOT_URL}${ORDERS}/${orderId}/${PRODUCTS}/${productId}`, {headers})
    return data.pipe(catchError((error)=>{
      return throwError(()=>error)
    }))
  }
}
