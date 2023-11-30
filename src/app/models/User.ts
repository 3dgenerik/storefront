export class User {
    id?: number;
    first_name: string;
    last_name: string;
    password: string;

    constructor() {
        this.id = 1;
        this.first_name = '';
        this.last_name = '';
        this.password = '';
    }
}
