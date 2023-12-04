import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../models/Order';
import { ORDERS, ROOT_URL } from '../../constants/constants';
import { HeadersService } from '../../services/headers.service';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { TokenStorageService } from '../../users/services/token-storage.service';

@Injectable({
    providedIn: 'root',
})
export class CreateOrderService {
    token: ISignInRegisterUser;

    constructor(
        private http: HttpClient,
        private headersService: HeadersService,
        private tokenStorageService: TokenStorageService,
    ) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null');
    }

    createOrder(): Observable<Order> {
        const headers = this.headersService.headers();

        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null');

        const order: Order = {
            user_id: this.token.output.user.id || 1,
            status: 'active',
        };

        const data = this.http.post<Order>(`${ROOT_URL}${ORDERS}/create`, order, { headers });

        return data.pipe(
            catchError((error) => {
                return throwError(() => `${error.error}`);
            }),
        );
    }
}
