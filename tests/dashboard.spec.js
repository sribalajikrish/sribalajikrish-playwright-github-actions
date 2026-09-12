import { test } from '@playwright/test';

test('Dashboard', async ({ page }) => {
    console.log('Dashboard');
    await page.waitForTimeout(5000);
});