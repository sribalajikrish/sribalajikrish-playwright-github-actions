import { expect, test } from '@playwright/test';

test('Wait For URL', async ({ page }) => {

    await page.goto('https://qaplayground.com/');
    const responsePromise = page.waitForResponse('***/api/send');
    await page.locator('//a[text()="Practice"]').nth(0).click();
    const response =
        await responsePromise;
    console.log(`URL : ${response.url()}`);
    console.log(`Status : ${response.status()}`);
    console.log(`Method : ${response.request().method()}`);

});