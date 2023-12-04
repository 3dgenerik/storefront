import { Component, Input } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
})
export class UserComponent {
    @Input() user: User = new User();

    constructor() {}
}
