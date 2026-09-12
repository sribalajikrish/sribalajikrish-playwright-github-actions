import { test, expect } from '@playwright/test';

test("Tabs", async ({ page, context }) => {
    // Navigate to the target page
    await page.goto('https://qaplayground.com/practice/tabs-windows');

    const newPagePromise  = context.waitForEvent('page');

    await page.getByTestId('tw-open-new-tab').click();

    const newPage = await newPagePromise;

    await newPage.waitForLoadState();
    
    console.log(`Page Count : ${context.pages().length}`);

    expect(context.pages().length).toBe(2);
});