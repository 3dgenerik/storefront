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
  