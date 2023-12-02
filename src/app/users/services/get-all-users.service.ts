import { Injectable } from '@angular/core';
import {Observable, catchError, throwError} from 'rxjs'
import { User } from '../../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROOT_URL, USERS } from '../../constants/constants';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersService {
  token: ISignInRegisterUser;

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
    this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null') as ISignInRegisterUser
    
  }

  getAllUsers():Observable<User[]>{
    const headers = new HttpHeaders({
      'Authorization':this.token ? `Bearer ${this.token.output.token}` : ''
    })

    const data = this.http.get<User[]>(`${ROOT_URL}${USERS}`, {headers})
    return data.pipe(catchError((error)=>{
      return throwError(()=>'Something went wrong while getting list of users. Maybe problem with token. Please sign in if you want to get list of users.')
    }))
  }
}
