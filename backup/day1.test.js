import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {

    const username = "Admin", password = "admin123";

    // await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // await page.fill('[name="username"]', username);
    // await page.fill('[name="password"]', password);

    // await page.click("button[type='submit']");

    const result = await page.goto("https://google.com");

    console.log(result);

});