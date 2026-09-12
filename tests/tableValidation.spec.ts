import { test, expect } from '@playwright/test';

test("Form Practice", async ({ page }) => {

    await page.goto('https://qaplayground.com/practice/data-table');

    let tableDataRows = await page.getByTestId('table-body').getByTestId('book-row').count();
    console.log(`Count the number of data rows on the current page: ${tableDataRows}`);

    let firstBookName = await page.getByTestId('table-body')
        .getByTestId('book-row')
        .first()
        .locator('td[data-col="book-name"]')
        .innerText();
    console.log(`Get the text of the first book name :  ${firstBookName}`);

    let cleanCodeBookAuthorName = await page.getByTestId('book-row')
    .filter({ hasText: 'Clean Code' }).locator('td[data-col="book-author"]').innerText();
    console.log(`Get the author of "Clean Code" : ${cleanCodeBookAuthorName}`);

    expect(tableDataRows).toBe(5);

    await page.getByTestId('book-row')
    .filter({ hasText: 'Clean Code' }).getByRole('button',{name:'Edit'}).click();

    let firstPage = await page.getByTestId('table-body').getByTestId('book-row').all();
    let iterationCount = 1;
    for (let row of firstPage){
       console.log(`Iteration = ${iterationCount}`);
       expect(await row.locator('td[data-col="book-name"]').innerText()).not.toBe('');
       expect(await row.locator('td[data-col="book-genre"]').innerText()).not.toBe('');
       expect(await row.locator('td[data-col="book-genre"]').getByTestId('genre-badge').innerText()).not.toBe('');
       expect(await row.locator('td[data-col="book-author"]').innerText()).not.toBe('');
       expect(await row.locator('td[data-col="book-isbn"]').innerText()).not.toBe('');
       expect(await row.locator('td[data-col="book-published"]').innerText()).not.toBe('');
       await expect(row.getByRole('button', { name: 'Edit' })).toBeVisible();
       await expect(row.getByRole('button', {name:'Delete'})).toBeVisible();
       iterationCount++;
    }

});