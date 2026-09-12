import { test } from '@playwright/test';

test('Multiple Pages Same Context', async ({ browser }) => {

    const context = await browser.newContext();

    const page1 = await context.newPage();

    const page2 = await context.newPage();

    await page1.goto('https://playwright.dev');

    await page2.goto('https://playwright.dev');

    console.log("Pages:", context.pages().length);

    await page1.pause();

});