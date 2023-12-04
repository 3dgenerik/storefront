import { Component, OnInit } from '@angular/core';
import { GetAllUsersService } from '../services/get-all-users.service';
import { User } from '../../models/User';

@Component({
    selector: 'app-get-all-users',
    templateUrl: './get-all-users.component.html',
    styleUrl: './get-all-users.component.css',
})
export class GetAllUsersComponent implements OnInit {
    users: User[] = [];
    hasError: boolean = false;
    errorMessage: string = '';
    constructor(private getAllUsersService: GetAllUsersService) {}

    ngOnInit(): void {
        this.getAllUsersService.getAllUsers().subscribe({
            next: (resposnse) => {
                this.users = resposnse;
                this.hasError = false;
            },
            error: (error) => {
                this.errorMessage = error;
                this.hasError = true;
            },
        });
    }
}
