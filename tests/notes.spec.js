import { test } from '@playwright/test';

test('Notes files', async ({ page }) => {
    console.log('Notes files Test');
    await page.waitForTimeout(5000);
});