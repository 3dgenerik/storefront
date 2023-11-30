import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/User';
import { ISignInRegisterUser } from '../../interfaces/interfaces';
import { SigninRegisterService } from '../services/signin-register.service';
import { Router } from '@angular/router';
import { ROOT_URL } from '../../constants/constants';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {
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

    submitRegister(): void {
        const userForm: User = {
            first_name: this.firstName,
            last_name: this.lastName,
            password: this.password,
        };

        this.loading = true;

        this.signinRegisterService.signInRegister(userForm, `${ROOT_URL}users/signup`).subscribe({
            next: (response) => {
                this.createdUserInfo = response;
                this.tokenStorageService.saveToken('token', JSON.stringify(this.createdUserInfo));
                this.loading = false;
                this.router.navigate(['/']);
            },
            error: (error) => {
                this.loading = false;
                this.signInError = error;
            },
        });
    }
}
