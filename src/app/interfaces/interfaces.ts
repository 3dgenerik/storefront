import { Order } from '../models/Order';
import { Product } from '../models/Product';
import { ProductInOrder } from '../models/ProductInOrder';
import { User } from '../models/User';

export interface ISignInRegisterUser {
    output: {
        user: User;
        token: string;
    };
}

export interface IProductItems{
    products: Product,
    productInOrder: ProductInOrder
  }
  
  export interface ISuccessData{
    firstName: string,
    lastName: string,
    totalPrice: number,
    timestamp: string,
    orderId: number
  }