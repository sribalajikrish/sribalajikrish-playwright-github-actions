import { playwright, test,chromium } from '@playwright/test';

test('Multiple Contexts and Pages', async ({ browser }) => {

    // Customer
    const testContext = await chromium.launch();
    const customerContext = await browser.newContext();
    const customerPage1 = await customerContext.newPage();
    const customerPage2 = await customerContext.newPage();

    // Manager
    const managerContext = await browser.newContext();
    const managerPage = await managerContext.newPage();

    await customerPage1.goto('https://playwright.dev');
    await customerPage2.goto('https://playwright.dev/docs');
    await managerPage.goto('https://playwright.dev');

    console.log('Customer Pages:', customerContext.pages().length);
    console.log('Manager Pages:', managerContext.pages().length);

    await customerPage1.pause();
});