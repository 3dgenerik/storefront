import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TokenStorageService {
    private token: string = '';

    saveToken(valueName: string, token: string): void {
        localStorage.setItem(valueName, token);
    }

    getToken(valueName: string): string | null {
        return localStorage.getItem(valueName);
    }

    removeToken(valueName: string): void {
        localStorage.removeItem(valueName);
    }
}
