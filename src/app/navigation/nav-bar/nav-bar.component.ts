import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SigninRegisterService } from '../../users/services/signin-register.service';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { ISignInRegisterUser } from '../../interfaces/interfaces';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
    token: ISignInRegisterUser | null;
    
    constructor(
        private signinRegisterService: SigninRegisterService,
        private router: Router,
        private tokenStorageService: TokenStorageService
    ) {
        this.token = JSON.parse(this.tokenStorageService.getToken() || 'null')
    }

    logOut(): void {
        this.router.navigate(['signin']);
        this.tokenStorageService.removeToken()
    }
}
