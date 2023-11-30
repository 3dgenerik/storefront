import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private token: string = '';

  saveToken(token: string): void {
    localStorage.setItem(this.token, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.token);
  }

  removeToken(): void {
    localStorage.removeItem(this.token);
  }
}
