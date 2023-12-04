export class ProductInOrder {
    id?: number;
    quantity: number;
    product_id: number;
    order_id: number;

    constructor() {
        this.id = 1;
        this.quantity = 1;
        this.product_id = 1;
        this.order_id = 1;
    }
}
