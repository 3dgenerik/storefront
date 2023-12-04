import { Injectable } from '@angular/core';
import { TokenStorageService } from '../users/services/token-storage.service';
import { ISignInRegisterUser } from '../interfaces/interfaces';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HeadersService {
    token: ISignInRegisterUser;

    constructor(private tokenStorageService: TokenStorageService) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null');
    }

    headers(): HttpHeaders {
        return new HttpHeaders({
            Authorization: this.token ? `Bearer ${this.token.output.token}` : '',
        });
    }
}
