import { LoginPageLocators } from '../locators/loginpagelocators';
import {Page} from '@playwright/test';

export class LoginPage {
    
    constructor(private page: Page) {}
    
    async login(username: string, password: string) {
        await this.page.locator(LoginPageLocators.usernameInput).waitFor({state: 'visible'});
        await this.page.fill(LoginPageLocators.usernameInput, username);
        await this.page.fill(LoginPageLocators.passwordInput, password);
        await this.page.click(LoginPageLocators.loginButton);
    }
}