import { expect, test } from "./fixture/inventory.fixture";
import { InventoryPage } from "../page-objects/InventoryPage";
import { expectedLogoText } from "../test-data/inventoryPage/inventoryTestData"


test.describe('TS-05 - Check shopping functionality before redirecting to the shopping cart', () => {

    test('Check the correctness of the inventory page', async ({ inventoryPage }) => {

        console.log(inventoryPage.checkOpen)
        console.log('done')
    })

    test('TC_IP_01 - Verify the ability to add the product to the shopping cart', async ({ inventoryPage }) => {
        const productIndex = 3
        await inventoryPage.addProductToShoppingCartbyIndex(productIndex)
        expect(await inventoryPage.getShoppingCartBadgeCount()).toBe(await inventoryPage.getAddedProductsCount());

    })
    test('TC_IP_02 - Verify the ability to remove the product from the shopping cart', async ({ inventoryPage }) => {

        const productIndex = 1
        await inventoryPage.addProductToShoppingCartbyIndex(productIndex)
        await inventoryPage.addProductToShoppingCartbyIndex(3)
        expect(await inventoryPage.getAddedProductsCount()).toBe(2)
        await inventoryPage.removeProductToShoppingCartbyIndex(productIndex)
        expect(await inventoryPage.getAddedProductsCount()).toBe(1)


    })
    test('TC_IP_03 - Verify that the quantity icon (shopping_cart_badge) appears in the shopping cart when adding a product', async ({ inventoryPage }) => {

        const productIndex = 3
        await inventoryPage.addProductToShoppingCartbyIndex(productIndex)
        await expect(inventoryPage.shoppingCartBadge).toBeVisible();

    })
    test('TC_IP_04 - Verify the decrease in product quantity in the shopping_cart_badge after removing the product.', async ({ inventoryPage }) => {

        const productIndexToRemove = 4

        for (let i = 0; i < 5; i++) {
            const productIndex = i++
            await inventoryPage.addProductToShoppingCartbyIndex(productIndex)
        }

        await inventoryPage.removeProductToShoppingCartbyIndex(productIndexToRemove)

        expect(await inventoryPage.getShoppingCartBadgeCount()).toBe(await inventoryPage.getAddedProductsCount());
    })
    test('TC_IP_05 - Verify the ability to add the same product twice to the shopping cart', async ({ inventoryPage }) => {
        // 
    })
    test('TC_IP_06 - Verify redirection from the inventory page to the shopping cart page when the cart is empty.', async ({ inventoryPage }) => {
        //
    })
})
