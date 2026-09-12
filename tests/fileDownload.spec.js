import { test, expect } from '@playwright/test';
import fs from 'node:fs';

test('File Download', async ({ page }) => {

    await page.goto(
        'https://www.tutorialspoint.com/selenium/practice/upload-download.php'
    );

    const currentDir = process.cwd();
    const downloadPath =
        `${currentDir}/downloads/sampleFile.jpeg`;

    const downloadPromise =
        page.waitForEvent('download');

    await page.locator('//a[text()="Download"]').click();

    const download =
        await downloadPromise;

    console.log(
        `Suggested filename: ${download.suggestedFilename()}`
    );

    await download.saveAs(downloadPath);

    console.log(`Saved path: ${downloadPath}`);
    console.log(`File exists: ${fs.existsSync(downloadPath)}`);

    expect(fs.existsSync(downloadPath)).toBeTruthy();
});