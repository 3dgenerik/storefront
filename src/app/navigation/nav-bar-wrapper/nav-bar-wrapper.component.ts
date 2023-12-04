import { Component } from '@angular/core';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { TokenStorageService } from '../../users/services/token-storage.service';

@Component({
    selector: 'app-nav-bar-wrapper',
    templateUrl: './nav-bar-wrapper.component.html',
    styleUrl: './nav-bar-wrapper.component.css',
})
export class NavBarWrapperComponent {
    token: ISignInRegisterUser | null;

    constructor(private tokenStorageService: TokenStorageService) {
        this.token = JSON.parse(this.tokenStorageService.getToken('token') || 'null');
    }
}
