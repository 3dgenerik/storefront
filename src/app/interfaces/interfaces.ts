import { User } from '../models/User';

export interface ISignInRegisterUser {
    output: {
        user: User;
        token: string;
    };
}
