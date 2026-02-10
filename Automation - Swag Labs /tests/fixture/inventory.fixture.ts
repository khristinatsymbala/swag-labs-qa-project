import { test as base, expect } from '@playwright/test'
import { PageManager } from '../../page-objects/pageManager'
import { LoginPage, getUserByRole } from '../../page-objects/loginPage'
import { UserRole } from '../../test-data/loginPage/userRoles'

type Fixtures = {
    onInventoryPage: PageManager['onInventoryPage']
}

export const test = base.extend<Fixtures>({
    onInventoryPage: async ({ page }, use) => {
        const pm = new PageManager(page)
        const user = getUserByRole(UserRole.Standard)!

        await page.goto('/')
        await pm.onLoginPage.login(user)
        await expect(pm.onInventoryPage.checkOpen).toBeVisible()

        await use(pm.onInventoryPage)
    },
})

export { expect } from '@playwright/test'
