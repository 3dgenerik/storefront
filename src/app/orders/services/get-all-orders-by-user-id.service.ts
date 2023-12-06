import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Order } from '../../models/Order';
import { HeadersService } from '../../services/headers.service';
import { ORDERS, ROOT_URL, USERS } from '../../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class GetAllOrdersByUserIdService {

  constructor(private http: HttpClient, private  headersService: HeadersService) { }

  getAllOrdersByUserId(userId: number):Observable<Order[]>{
    const headers = this.headersService.headers()
    const data = this.http.get<Order[]>(`${ROOT_URL}${USERS}/${userId}/${ORDERS}`)
    return data.pipe(catchError((error)=>{
      return throwError(()=>error)
    }))
  }
}
