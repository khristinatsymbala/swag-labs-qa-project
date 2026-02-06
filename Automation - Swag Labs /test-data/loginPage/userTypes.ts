import { UserRole } from './userRoles';

export type LoginUser = {
    role: UserRole;
    credentials: {
        username: string;
        password: string;
    };
    //expectedResult: 'success' | 'error';
    errorMessage: string;
};