import { test, chromium, expect } from '@playwright/test';

test('Browser Lifecycle', async () => {

    console.log("Launching Browser...");

    const browser = await chromium.launch({
        headless: false
    });

    console.log("Browser Launched");

    await new Promise(resolve => setTimeout(resolve, 5000));

    console.log("Closing Browser");

    await browser.close();

    await expect("test").toEqual("test");

});