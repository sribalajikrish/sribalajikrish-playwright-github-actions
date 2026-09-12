import { test } from '@playwright/test';

test('BrowserContext Demo', async ({ browser }) => {

//     I want you to perform this exact experiment:

// Create 2 BrowserContexts.
// Create 2 Pages (one in each context).
// Log in to GitHub only in Context 1.
// Verify that Context 2 is not logged in.
// Create another Page inside Context 1.
// Verify that it is already logged in.

// Don't worry if it takes a little time.

    const context1 = await browser.newContext();
    const context2 = await browser.newContext();

    const page1 = await context1.newPage();
    const page2 = await context2.newPage();

    await page1.goto("https://github.com/login");
    await page2.goto("https://github.com");
    const page3 = await context1.newPage();

    await page3.goto("https://github.com");
    await page1.pause();

});