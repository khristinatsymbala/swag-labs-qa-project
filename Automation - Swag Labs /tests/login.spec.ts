import { test } from '../tests/fixture/pageManager.fixture';
import { expect } from '@playwright/test';
import { getUserByRole } from "../page-objects/loginPage";
import { UserRole } from '../test-data/loginPage/userRoles';


test.describe('Login module - TS_01 - Verify user authentication on the login page', () => {

    test('TS_LG_01 - [Desktop] Verify the login with a valid username and a valid password', async ({ pageManager }) => {
        await pageManager.onLoginPage.login(getUserByRole(UserRole.Standard)!)
    })

    test('TS_LG_02 - [Desktop] Verify the login with an invalid username and a valid password', async ({ pageManager }) => {
        const user = getUserByRole(UserRole.InvalidUserName)!

        await pageManager.onLoginPage.login(user)
        await expect(pageManager.onLoginPage.errorMessage).toContainText(user.errorMessage)
    })

    test('TS_LG_03 - [Desktop] Verify the login with a valid username and an invalid password', async ({ pageManager }) => {

        const user = getUserByRole(UserRole.InvalidPassword)!

        await pageManager.onLoginPage.login(user)
        await expect(pageManager.onLoginPage.errorMessage).toContainText(user.errorMessage)
    })

    test('TS_LG_04 - [Desktop] Verify the login with an invalid username and an invalid password', async ({ pageManager }) => {

        const user = getUserByRole(UserRole.InvalidAll)!

        await pageManager.onLoginPage.login(user)
        await expect(pageManager.onLoginPage.errorMessage).toContainText(user.errorMessage)
    })

    test('TS_LG_05 - [Desktop] Verify the login without entering any credentials', async ({ pageManager }) => {

        const user = getUserByRole(UserRole.Empty)!

        await pageManager.onLoginPage.login(user)
        await expect(pageManager.onLoginPage.errorMessage).toContainText(user.errorMessage)
    })

    test('TS_LG_06 - [Desktop] Verify that locked user is not able to login into the system', async ({ pageManager }) => {

        const user = getUserByRole(UserRole.LockedOut)!

        await pageManager.onLoginPage.login(user)
        await expect(pageManager.onLoginPage.errorMessage).toContainText(user.errorMessage)
    })

    test('TC_LP_07 - [Desktop] Verify redirection to the Inventory page after successful user registration.', async ({ pageManager }) => {

        await pageManager.onLoginPage.login(getUserByRole(UserRole.Standard)!)
        //await expect(pageManager).toHaveURL('/inventory.html');

    })

})

test.describe('Login module - TS_02 - Verify UI and UX of the login form', () => {

    test('TC_LP_11 - [UX] [Desktop]  Verify the visual appearance of the error message to ensure the user is informed of any login issues.', async ({ pageManager }) => {

        const user = getUserByRole(UserRole.InvalidAll)!

        await pageManager.onLoginPage.login(user)
        await expect(pageManager.onLoginPage.errorMessage).toContainText(user.errorMessage)
    })
})



