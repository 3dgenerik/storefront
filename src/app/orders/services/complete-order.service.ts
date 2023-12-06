import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Order } from '../../models/Order';
import { ORDERS, ROOT_URL, USERS } from '../../constants/constants';
import { HeadersService } from '../../services/headers.service';

@Injectable({
  providedIn: 'root'
})
export class CompleteOrderService {

  constructor(private http: HttpClient, private headersService: HeadersService) { }

  completeOrder(userId: number, orderId: number):Observable<Order>{
    const headers = this.headersService.headers()

    const data = this.http.put<Order>(`${ROOT_URL}${USERS}/${userId}/${ORDERS}/${orderId}`, '', {headers})
    return data.pipe(catchError((error)=>{
      return throwError(()=>error)
    }))
  }
}
