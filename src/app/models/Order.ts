export class Order {
    id?: number;
    user_id: number;
    status: string;
    timestamp?: string;

    constructor() {
        this.id = this.user_id = 1;
        this.status = 'active';
        this.timestamp = '';
    }
}
