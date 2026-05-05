import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { baseUrl, Username, Password } from '../utils/envConfig';
import { ProductPage } from '../Pages/productpage';

test.describe('product page tests', () => {

    let productPage: ProductPage;
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);

        await page.goto(baseUrl);
        await page.waitForLoadState('networkidle');
        await loginPage.login(Username, Password);
        await expect(page).toHaveURL(/.*inventory\.html/);  
    });

 test('should logout successfully', async ({ page }) => {

        await productPage.logout();
        await expect(page.locator('#login-button')).toBeVisible(); 
    }

 )


});