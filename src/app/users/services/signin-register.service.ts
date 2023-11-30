import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { User } from '../../models/User';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class SigninRegisterService {
    constructor(private http: HttpClient) {}

    signInRegister(user: User, url: string): Observable<ISignInRegisterUser> {
        const data = this.http.post<ISignInRegisterUser>(url, user);

        return data.pipe(
            catchError((error) => {
                return throwError(() => error.error);
            }),
        );
    }
}
