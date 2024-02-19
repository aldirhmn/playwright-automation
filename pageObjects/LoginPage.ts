import { Locator, Page } from "@playwright/test";

export class LoginPage{
    private page: Page;
    private usernameInput : Locator;
    private passwordInput : Locator;
    private loginButton : Locator;
    private errorMessage : Locator;
    private inventoryList : Locator;

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
        this.inventoryList = page.locator('.inventory_list');
    }

    async navigate(url:string): Promise<void>{
        await this.page.goto(url);
    }

    async login(username: string, password: string): Promise<void>{
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage(): Promise<string>{
        return await this.errorMessage.textContent() ?? "No Error Message";
    }

    async isInventoryVisible(): Promise<boolean>{
        await this.inventoryList.isVisible();
        return await this.inventoryList.isVisible();
    }
}