import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeadersService } from '../../services/headers.service';
import { Observable, catchError, throwError } from 'rxjs';
import { Order } from '../../models/Order';
import { ORDERS, ROOT_URL, USERS } from '../../constants/constants';

@Injectable({
    providedIn: 'root',
})
export class GetOrderByStatusAndUserIdService {
    constructor(
        private http: HttpClient,
        private headersService: HeadersService,
    ) {}

    getOrderByStatusAndUserId(id: number): Observable<Order[]> {
        const headers = this.headersService.headers();
        const data = this.http.get<Order[]>(`${ROOT_URL}${USERS}/${id}/${ORDERS}/status?status=active`, { headers });
        return data.pipe(
            catchError((error) => {
                return throwError(() => `${error.error.text}`);
            }),
        );
    }
}
