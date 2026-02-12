import { expect, test } from "./fixture/inventory.fixture";
import { InventoryPage } from "../page-objects/InventoryPage";
import { expectedLogoText } from "../test-data/inventoryPage/inventoryTestData"

test('Check the correctness of the inventory page', async ({ onInventoryPage }) => {

    console.log(onInventoryPage.checkOpen)
    console.log('done')
})

test.describe('TS-05 - Check shopping functionality before redirecting to the shopping cart', () => {


    test('TC_IP_01 - Verify the ability to add the product to the shopping cart', async ({ onInventoryPage }) => {

        // Arrange
        const productIndex = 3

        //Act
        await onInventoryPage.addProductToShoppingCartbyIndex(productIndex)

        // Assert
        const cartBadgeCount = await onInventoryPage.getShoppingCartBadgeCount()
        const addedProductsCount = await onInventoryPage.getAddedProductsCount()

        expect(cartBadgeCount).toBe(addedProductsCount);

    })
    test('TC_IP_02 - Verify the ability to remove the product from the shopping cart', async ({ onInventoryPage }) => {

        //Arrange
        const firstProduct = 1
        const secondProduct = 3

        await onInventoryPage.addProductToShoppingCartbyIndex(firstProduct)
        await onInventoryPage.addProductToShoppingCartbyIndex(secondProduct)

        // Assert initial state
        const initialCount = await onInventoryPage.getAddedProductsCount()
        expect(initialCount).toBe(2)

        //Act
        await onInventoryPage.removeProductToShoppingCartbyIndex(firstProduct)

        // Assert update state
        const updateCount = await onInventoryPage.getAddedProductsCount()
        expect(updateCount).toBe(1)


    })
    test('TC_IP_03 - Verify that the quantity icon (shopping_cart_badge) appears in the shopping cart when adding a product', async ({ onInventoryPage }) => {
        //Arrange
        const productIndex = 3
        //Act
        await onInventoryPage.addProductToShoppingCartbyIndex(productIndex)
        //Assert
        await expect(onInventoryPage.shoppingCartBadge).toBeVisible();

    })
    test('TC_IP_04 - Verify the decrease in product quantity in the shopping_cart_badge after removing the product.', async ({ onInventoryPage }) => {
        //Arrange
        const productIndexToRemove = 4

        //Act
        onInventoryPage.addMultiplProductsToShoppingCart()
        await onInventoryPage.removeProductToShoppingCartbyIndex(productIndexToRemove)

        //Assert
        const cartBadgeCount = await onInventoryPage.getShoppingCartBadgeCount()
        const addedProductCount = await onInventoryPage.getAddedProductsCount()
        expect(cartBadgeCount).toBe(addedProductCount);
    })
    test('TC_IP_05 - Verify the ability to add the same product twice to the shopping cart', async ({ onInventoryPage }) => {
        // 
    })
    test('TC_IP_06 - Verify redirection from the inventory page to the shopping cart page when the cart is empty.', async ({ onInventoryPage }) => {
        //
    })
})
