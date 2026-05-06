import {test, expect} from '@playwright/test';

test.describe('login functionality', async() => {

test('should login successfully with valid credentials', async({page}) => {

await page. goto('https://www.saucedemo.com/');

await page.locator("//input[@id='user-name']").fill('standard_user');
await page.locator("//input[@id='password']").fill('secret_sauce'); 
await page.locator("//input[@id='login-button']").click();
await page.waitForSelector('div.app_logo');
await expect(page.locator('div.app_logo')).toHaveText('Swag Labs');

})

test('should fail to login with invalid credentials', async({page}) => {

await page. goto('https://www.saucedemo.com/');

await page.locator("//input[@id='user-name']").fill('standard_user');
await page.locator("//input[@id='password']").fill('secret_sauce12'); 
await page.locator("//input[@id='login-button']").click();
await page.waitForSelector('h3[data-test="error"]');
await expect(page.locator('h3[data-test="error"]')).toContainText('do not match');

})

})

test.describe('cart page funstionality', async() => {

test('should add product to cart', async({page}) => {

await page. goto('https://www.saucedemo.com/');

await page.locator("//input[@id='user-name']").fill('standard_user');
await page.locator("//input[@id='password']").fill('secret_sauce'); 
await page.locator("//input[@id='login-button']").click();
await page.waitForSelector('div.app_logo');
await expect(page.locator('div.app_logo')).toHaveText('Swag Labs');
await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();
await page.locator("//a[@class='shopping_cart_link']").click();
await page.locator('span.shopping_cart_badge').waitFor();
await expect(page.locator('span.shopping_cart_badge')).toHaveText('1');
await page.waitForSelector('div.cart_item');
await expect(page.locator('div.cart_item')).toContainText('Sauce Labs Backpack');
await page.waitForTimeout(5000);
await page.locator('.shopping_cart_link').click();
await expect(page.locator('#checkout')).toBeVisible();



})


})
