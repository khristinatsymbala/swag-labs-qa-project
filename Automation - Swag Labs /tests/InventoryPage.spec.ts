import { expect, test } from "../tests/fixture/inventory.fexture";
import { InventoryPage } from "../page-objects/InventoryPage";
import { expectedLogoText } from "../test-data/inventoryPage/inventoryTestData"


test.describe('Check shopping functionality before redirecting to the shopping cart', () => {
    test('1', async ({ inventoryPage }) => {

        console.log(inventoryPage.checkOpen)
        console.log('done')
    })

    test('Logo text', async ({ inventoryPage }) => {

        await expect(inventoryPage.logoText).toBeVisible()
        await expect(inventoryPage.logoText).toContainText(expectedLogoText)

    })
})
