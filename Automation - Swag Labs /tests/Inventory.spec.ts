import { expect, test } from "./fixture/inventory.fixture";
import { InventoryPage } from "../page-objects/InventoryPage";
import { expectedLogoText } from "../test-data/inventoryPage/inventoryTestData"


test.describe('TS-05 - Check shopping functionality before redirecting to the shopping cart', () => {

    test('Check the correctness of the inventory page', async ({ onInventoryPage }) => {

        console.log(onInventoryPage.checkOpen)
        console.log('done')
    })

    test('TC_IP_01 - Verify the ability to add the product to the shopping cart', async ({ onInventoryPage }) => {
        const productIndex = 3
        await onInventoryPage.addProductToShoppingCartbyIndex(productIndex)
        expect(await onInventoryPage.getShoppingCartBadgeCount()).toBe(await onInventoryPage.getAddedProductsCount());

    })
    test('TC_IP_02 - Verify the ability to remove the product from the shopping cart', async ({ onInventoryPage }) => {

        const productIndex = 1
        await onInventoryPage.addProductToShoppingCartbyIndex(productIndex)
        await onInventoryPage.addProductToShoppingCartbyIndex(3)
        expect(await onInventoryPage.getAddedProductsCount()).toBe(2)
        await onInventoryPage.removeProductToShoppingCartbyIndex(productIndex)
        expect(await onInventoryPage.getAddedProductsCount()).toBe(1)


    })
    test('TC_IP_03 - Verify that the quantity icon (shopping_cart_badge) appears in the shopping cart when adding a product', async ({ onInventoryPage }) => {

        const productIndex = 3
        await onInventoryPage.addProductToShoppingCartbyIndex(productIndex)
        await expect(onInventoryPage.shoppingCartBadge).toBeVisible();

    })
    test('TC_IP_04 - Verify the decrease in product quantity in the shopping_cart_badge after removing the product.', async ({ onInventoryPage }) => {

        const productIndexToRemove = 4
        onInventoryPage.addMultiplProductsToShoppingCart()
        await onInventoryPage.removeProductToShoppingCartbyIndex(productIndexToRemove)

        expect(await onInventoryPage.getShoppingCartBadgeCount()).toBe(await onInventoryPage.getAddedProductsCount());
    })
    test('TC_IP_05 - Verify the ability to add the same product twice to the shopping cart', async ({ onInventoryPage }) => {
        // 
    })
    test('TC_IP_06 - Verify redirection from the inventory page to the shopping cart page when the cart is empty.', async ({ onInventoryPage }) => {
        //
    })
})
