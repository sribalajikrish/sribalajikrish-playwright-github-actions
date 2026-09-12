import { test, expect } from '@playwright/test';

test("File Upload", async ({ page }) => {

    await page.goto('https://qaplayground.com/practice/file-upload');
    let currentDir = process.cwd();
    await page.locator('input[type="file"]').nth(0).setInputFiles(`${currentDir}/tests/test.txt`);
    await page.waitForTimeout(10000);
});