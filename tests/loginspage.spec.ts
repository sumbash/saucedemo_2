import {test, expect} from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';
import { baseUrl, Username, Password } from '../utils/envConfig';

test('should login successfully with valid credentials', async({page}) => {

const loginPage = new LoginPage(page);

await page.goto(baseUrl);
await page.waitForLoadState('networkidle');
await loginPage.login(Username, Password);

await page.waitForSelector('div.app_logo');
await expect(page.locator('div.app_logo')).toHaveText('Swag Labs');

});