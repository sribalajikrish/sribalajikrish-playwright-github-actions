import { test, expect } from '@playwright/test';

test('Pagination Practice', async ({ page }) => {

    await page.goto('https://qaplayground.com/practice/data-table');

    let nextButtonStatus = true;
    let totalRecordCount = 0;
    let currentPageNumber = 0;

    const nextButtonPage =
        page.locator('button[aria-label="Next page"]');

    do {
        currentPageNumber += 1;

        // Validate current page
        await expect(
            page.locator('button[aria-current="page"]')
        ).toHaveText(String(currentPageNumber));

        const rows = page
            .getByTestId('table-body')
            .getByTestId('book-row');

        const rowCount = await rows.count();

        // Validate current page contains records
        expect(rowCount).toBeGreaterThan(0);

        totalRecordCount += rowCount;

        if (await nextButtonPage.isEnabled()) {
            await nextButtonPage.click();
        } else {
            nextButtonStatus = false;
        }

    } while (nextButtonStatus);

    expect(totalRecordCount).toBe(25);
});