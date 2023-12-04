import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TokenStorageService {
    private token: string = '';

    constructor() {
        this.token = this.getToken('token') || 'null';
    }

    saveToken(valueName: string, token: string): void {
        localStorage.setItem(valueName, token);
        this.token = token;
    }

    getToken(valueName: string): string | null {
        return localStorage.getItem(valueName);
    }

    removeToken(valueName: string): void {
        localStorage.removeItem(valueName);
        this.token = '';
    }
}
