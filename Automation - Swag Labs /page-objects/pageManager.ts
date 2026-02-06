import { Page, expect } from "@playwright/test";
import { LoginPage } from "./loginPage";
import { InventoryPage } from "./InventoryPage";

export class PageManager {

    private readonly page: Page
    private readonly loginPage: LoginPage
    private readonly inventoryPage: InventoryPage

    constructor(page: Page) {
        this.page = page
        this.loginPage = new LoginPage(this.page)
        this.inventoryPage = new InventoryPage(this.page)
    }

    get onLoginPage() {
        return this.loginPage
    }

    get onInventoryPage() {
        return this.inventoryPage
    }
}