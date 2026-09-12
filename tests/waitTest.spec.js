import { test } from '@playwright/test';

test('Wait For Load State', async ({ page }) => {

    await page.goto('https://qaplayground.com/');

    console.log(`Navigation completed: ${Date.now()}`);

    await page.waitForLoadState('domcontentloaded');
    console.log(`DOM Content Loaded: ${Date.now()}`);

    await page.waitForLoadState('load');
    console.log(`Load Completed: ${Date.now()}`);

    await page.waitForLoadState('networkidle');
    console.log(`Network Idle: ${Date.now()}`);

});