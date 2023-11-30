import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/User';
import { SigninRegisterService } from '../services/signin-register.service';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { Router } from '@angular/router';
import { ROOT_URL } from '../../constants/constants';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrl: './signin.component.css',
})
export class SigninComponent {
    @Output() signInProp: EventEmitter<User> = new EventEmitter();

    firstName: string = '';
    lastName: string = '';
    password: string = '';

    signInError: string = '';
    loading: boolean = false;

    createdUserInfo: ISignInRegisterUser = {
        output: {
            user: new User(),
            token: '',
        },
    };

    constructor(
        private signinRegisterService: SigninRegisterService,
        private router: Router,
        private tokenStorageService: TokenStorageService,
    ) {}

    submitSignin(): void {
        const userForm: User = {
            first_name: this.firstName,
            last_name: this.lastName,
            password: this.password,
        };

        this.loading = true;

        this.signinRegisterService.signInRegister(userForm, `${ROOT_URL}users/signin`).subscribe(
            (response) => {
                this.createdUserInfo = response;
                this.tokenStorageService.saveToken(JSON.stringify(this.createdUserInfo))
                this.loading = false;
                this.router.navigate(['/']);
            },
            (error) => {
                this.loading = false;
                this.signInError = error;
            },
        );
    }
}
