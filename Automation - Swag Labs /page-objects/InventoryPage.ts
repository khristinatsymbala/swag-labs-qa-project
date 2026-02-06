import { Locator, Page } from "@playwright/test";

export class InventoryPage {
    readonly page: Page

    readonly checkOpen: Locator
    //header-container
    readonly logoText: Locator
    readonly shoppingCartImg: Locator

    constructor(page: Page) {
        this.page = page

        this.checkOpen = page.locator('#item_4_title_link')
        //header-container
        this.logoText = page.locator('.app_logo')
        this.shoppingCartImg = page.getByTestId('shopping-cart-link')
    }

}