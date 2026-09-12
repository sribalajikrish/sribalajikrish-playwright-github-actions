import { test, expect } from '@playwright/test';

test("Form Practice", async ({ page }) => {

    await page.goto('https://qaplayground.com/practice/forms');

    //Input Textbox
    await page.getByLabel('First Name').fill('Sri Balaji');
    await page.getByLabel('Last Name').fill('Krishnamurthy');
    await page.getByLabel('Phone').fill('9677451760');

    //Input DateofBirth date field
    await page.getByLabel('Date of Birth').fill('2000-01-01');

    //radio button
    await page.getByTestId('radio-gender-male').check();

    //button
    await page.getByRole('button', { name: 'Save Details' }).click();

    //dropdown
    await page.getByLabel('country').selectOption('India');

    await page.getByLabel('city').fill('Chennai');

    await page.getByPlaceholder('Tell us a little about yourself…').fill('QA Manager');

    //Multiple Checkbox

    let multiSelect = ['Selenium', 'Playwright'];

    for (let i=0; i<multiSelect.length; i++){
        await page.getByLabel(multiSelect[`${i}`]).check();
    }

    await page.getByLabel('I agree to the Terms & Conditions').check();

    await page.waitForTimeout(10000);
});