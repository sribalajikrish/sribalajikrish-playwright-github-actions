import { test, expect } from '@playwright/test';

test('Login', async () => {
    const users = [
        "Admin",
        "ESS",
        "Recruiter"
    ];
    const playwright = require('playwright');
    const browser = await playwright.chromium.launch();

    for (const user of users) {
        const context = await browser.newContext(); // fresh session
        const page = await context.newPage();

        await page.goto("https://www.google.com");

        await context.close(); // clean up only this session
    }

    await browser.close();

});