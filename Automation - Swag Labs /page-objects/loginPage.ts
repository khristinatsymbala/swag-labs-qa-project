import { expect, Locator, Page } from "@playwright/test";
import { loginTestUser } from '../test-data/loginPage/loginUsers';
import { UserRole } from '../test-data/loginPage/userRoles';

export class LoginPage {

    readonly page: Page
    readonly errorMessage: Locator

    constructor(page: Page) {
        this.page = page
        this.errorMessage = page.locator('[class= "error-message-container error"]')
    }

    async login(user: { credentials: { username: string; password: string } }) {
        await this.page.getByPlaceholder('Username').fill(user.credentials.username)
        await this.page.getByPlaceholder('Password').fill(user.credentials.password)
        await this.page.getByRole('button').click()
    }

}

export function getUserByRole(role: UserRole) {
    return loginTestUser.find(
        (user) => user.role === role
    );
}

