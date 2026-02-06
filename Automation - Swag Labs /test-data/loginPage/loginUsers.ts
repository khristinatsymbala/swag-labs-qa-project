import { LoginUser } from './userTypes';
import { UserRole } from './userRoles';

export const loginTestUser: LoginUser[] = [
    {
        role: UserRole.Standard,
        credentials: {
            username: 'standard_user',
            password: 'secret_sauce',
        },
        errorMessage: ''
    },
    {
        role: UserRole.Empty,
        credentials: { username: '', password: '' },
        errorMessage: 'Epic sadface: Username is required'
    },
    { role: UserRole.Problem, credentials: { username: 'problem_user', password: 'secret_sauce' }, errorMessage: '' },
    { role: UserRole.Performance, credentials: { username: 'performance_glitch_user', password: 'secret_sauce' }, errorMessage: '' },
    { role: UserRole.InvalidUserName, credentials: { username: 'standaruser', password: 'secret_sauce' }, errorMessage: 'Epic sadface: Username and password do not match any user in this service', },
    { role: UserRole.InvalidPassword, credentials: { username: 'standard_user', password: 'secretdauce' }, errorMessage: 'Epic sadface: Username and password do not match any user in this service', },
    { role: UserRole.InvalidAll, credentials: { username: 'standarduser', password: 'secretdauce' }, errorMessage: 'Epic sadface: Username and password do not match any user in this service', }

]