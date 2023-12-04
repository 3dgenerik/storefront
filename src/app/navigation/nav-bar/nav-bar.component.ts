import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SigninRegisterService } from '../../users/services/signin-register.service';
import { TokenStorageService } from '../../users/services/token-storage.service';
import { ISignInRegisterUser } from '../../interfaces/interfaces';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
    token: ISignInRegisterUser | null;

    constructor(
        private signinRegisterService: SigninRegisterService,
        private router: Router,
        private tokenStorageService: TokenStorageService,
    ) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null');
    }

    ngOnInit(): void {}

    logOut(): void {
        this.tokenStorageService.removeToken('token');
        this.router.navigate(['signin']);
    }
}
