import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProductInOrder } from '../../models/ProductInOrder';
import { HeadersService } from '../../services/headers.service';
import { PRODUCTS_IN_ORDERS, ROOT_URL } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsInOrderByOrderIdService {

  constructor(private http: HttpClient, private headersService: HeadersService) { }

  getAllProductsInOrderByOrderId(id:number):Observable<ProductInOrder[]>{
    const headers = this.headersService.headers()
    const data = this.http.get<ProductInOrder[]>(`${ROOT_URL}${PRODUCTS_IN_ORDERS}/${id}`, {headers})
    return data.pipe(catchError((error)=>{
      return throwError(()=>error)
    }))
  }
}
