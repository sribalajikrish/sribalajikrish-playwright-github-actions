import { expect, test } from '@playwright/test';

test('Wait For URL', async ({ page }) => {

    await page.goto('https://qaplayground.com/');
    // await page.locator('//a[text()="Practice"]').nth(0).click();
    // await page.waitForURL('**/practice');
    // expect(page.url()).toContain('practice');

    // OR

    const urlPromise =
        page.waitForURL('**/practice');

    await page.locator('//a[text()="Practice"]').nth(0).click();

    await urlPromise;

    await expect(page).toHaveURL('/practice');
});