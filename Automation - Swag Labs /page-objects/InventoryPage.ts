import { expect, Locator, Page } from "@playwright/test";
import { InventoryIteam } from "../test-data/inventoryPage/inventoryItemType"

export class InventoryPage {
    readonly page: Page

    readonly checkOpen: Locator
    //header-container
    readonly logoText: Locator
    readonly shoppingCartImg: Locator
    readonly shoppingCartBadge: Locator
    //countProductInCart: number

    constructor(page: Page) {
        this.page = page

        this.checkOpen = page.locator('#item_4_title_link')
        //header-container
        this.logoText = page.locator('.app_logo')
        this.shoppingCartImg = page.getByTestId('shopping-cart-link')
        this.shoppingCartBadge = page.getByTestId('shopping-cart-badge')
        //this.countProductInCart = 0
    }
    // Array of the inventory products - like vector
    async getInventoryIteams(): Promise<InventoryIteam[]> {
        const items: InventoryIteam[] = [];

        const cards = this.page.locator('.inventory_iteam');
        const count = await cards.count();

        for (let i = 0; i < count; i++) {
            const card = cards.nth(i);

            items.push({
                inventory_item_img: {
                    dataTest: await card.locator('img').getAttribute('data-test') ?? '',
                    alt: await card.locator('img').getAttribute('alt') ?? '',
                    src: await card.locator('img').getAttribute('src') ?? '',
                }, inventory_item_description: {
                    dataTestHref: await card.locator('.inventory_item_name').getAttribute('data-test') ?? '',
                    name: await card.locator('.inventory_item_name').innerText(),
                    descriptionText: await card.locator('.inventory_item_desc').innerText(),
                },
                price: await card.locator('.inventory_item_price').innerText(),
            });
        }

        return items;
    }

    async getProductByIndex(index: number): Promise<InventoryIteam> {
        const items = await this.getInventoryIteams();
        return items[index];
    }

    async addProductToShoppingCartbyIndex(index: number) {
        const items = this.page.locator('.inventory_item').nth(index)
        const button = items.getByRole('button')

        const buttonText = await button.textContent()

        if (buttonText === 'Add to cart') {
            await button.click()
        } else { console.log('Product is already added to the cart') }

    }

    // Add multipal products 
    async addMultiplProductsToShoppingCart() {
        for (let i = 0; i < 5; i++) {
            const productIndex = i++
            await this.addProductToShoppingCartbyIndex(productIndex)
        }
    }

    async removeProductToShoppingCartbyIndex(index: number) {
        const items = this.page.locator('.inventory_item').nth(index)
        const button = items.getByRole('button')

        const buttonText = await button.textContent()

        if (buttonText === 'Remove') {
            await button.click()
        } else { console.log('Product is not in the cart') }

    }

    async getShoppingCartBadgeCount(): Promise<number> {
        const text = await this.shoppingCartBadge.textContent();
        return text ? Number(text) : 0;
    }

    async getAddedProductsCount(): Promise<number> {
        return await this.page.locator('button', { hasText: 'Remove' }).count();
    }
}

