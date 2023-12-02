import { Injectable } from '@angular/core';
import {Observable, catchError, throwError} from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Order } from '../../models/Order';
import { ORDERS, ROOT_URL } from '../../constants/constants';
import { HeadersService } from '../../services/headers.service';

@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {

  constructor(private http: HttpClient, private headersService: HeadersService) {
  }

  createOrder():Observable<Order>{
    const headers = this.headersService.headers()

    const data = this.http.post<Order>(`${ROOT_URL}${ORDERS}/create`, {headers})
    return data.pipe(catchError((error)=>{
      return throwError(()=>`Can't create order: ${error}`)
    }))
  }

}
