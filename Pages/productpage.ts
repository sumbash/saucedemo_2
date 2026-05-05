import { Page } from '@playwright/test';
export class ProductPage {

    constructor(private page: Page) { }

    async logout() {

        await this.page.click('#react-burger-menu-btn');
        await this.page.waitForSelector('#logout_sidebar_link', { state: 'visible' });
        await this.page.click('#logout_sidebar_link');

    }

    async sortingProductsztoa() {

        await this.page.click('.product_sort_container');
        await this.page.selectOption('.product_sort_container', 'za');

        
}

}
