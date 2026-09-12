import { test } from '@playwright/test';

test('Profile', async ({ page }) => {
    console.log('Profile Test');
    await page.waitForTimeout(5000);
});