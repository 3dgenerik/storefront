import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin-register-navigation',
    templateUrl: './signin-register-navigation.component.html',
    styleUrl: './signin-register-navigation.component.css',
})
export class SigninRegisterNavigationComponent {
    constructor(private router: Router) {}

    navigate(route: string) {
        this.router.navigate([route]);
    }
}
