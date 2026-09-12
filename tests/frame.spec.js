import { test, expect } from '@playwright/test';

test("Frame", async ({ page }) => {
    // Navigate to the target page
    await page.goto('https://qaplayground.com/practice/iframes');

    // Interact with the elements inside the iframe
    const frame = page.frameLocator('iframe[name="basic-frame"]');
    await frame.locator('#iframe-name-input').fill('sribalaji@yopmail.com');
    await expect(frame.locator('#iframe-submit-btn')).toBeVisible();
});