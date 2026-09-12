import { test, expect } from '@playwright/test';

test("Form Practice", async ({ page }) => {
    await page.goto('https://qaplayground.com/practice/data-table');
    let firstPage = await page.getByTestId('table-body').getByTestId('book-row').all();
    let searchValidation = true;
    for (let row of firstPage) {
        let status = await expect(row).toBeVisible();
        console.log(status);
        if (await row.locator('td[data-col="book-name"]').innerText() === 'The Hobbit') {
            expect(await row.locator('td[data-col="book-author"]').innerText()).toBe('J.R.R. Tolkien');
            expect(await row.locator('td[data-col="book-genre"]').getByTestId('genre-badge').innerText()).toBe('Fantasy');
            await row.getByRole('button', { name: 'Edit' }).click();
            expect(await page.locator('input[data-testid="edit-input-book-name"]').inputValue()).toBe('The Hobbit');
            searchValidation = true;
            break;
        } else {
            searchValidation = false;
        }
    }
    expect(searchValidation).toBeTruthy();
});