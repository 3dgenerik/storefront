import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ProductInOrder } from '../../models/ProductInOrder';
import { ORDERS, PRODUCTS, ROOT_URL } from '../../constants/constants';
import { HeadersService } from '../../services/headers.service';

@Injectable({
  providedIn: 'root'
})
export class DeletelAllProductsByOrderIdService {

  constructor(private http: HttpClient, private headersService: HeadersService) { }

  deleteAllPoructsByOrderId(id: number):Observable<ProductInOrder[]>{
    const headers = this.headersService.headers()
    const data = this.http.delete<ProductInOrder[]>(`${ROOT_URL}${PRODUCTS}/${ORDERS}/${id}`, {headers})
    return data.pipe(catchError((error)=>{
      return throwError(()=>error)
    }))
  }
}
