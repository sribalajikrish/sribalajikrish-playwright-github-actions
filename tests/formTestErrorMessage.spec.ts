import { test, expect } from '@playwright/test';

test("Form Practice", async ({ page }) => {

    await page.goto('https://qaplayground.com/practice/forms');

    //Input Textbox
    // await page.getByLabel('First Name').fill('Sri Balaji');
    await page.getByLabel('Last Name').fill('Krishnamurthy');
    // await page.getByLabel('Phone').fill('9677451760');

    //Input DateofBirth date field
    await page.getByLabel('Date of Birth').fill('2000-01-01');

    //radio button
    // await page.getByTestId('radio-gender-male').check();

    //button
    await page.getByRole('button', { name: 'Save Details' }).click();

    //dropdown
    await page.getByLabel('country').selectOption('India');

    await page.getByLabel('city').fill('Chennai');

    await page.getByPlaceholder('Tell us a little about yourself…').fill('QA Manager');

    //Multiple Checkbox

    let multiSelect = ['Selenium', 'Playwright'];

    for (let select of multiSelect)
    {
        await page.getByLabel(select).check();
    }

    // await page.getByLabel('I agree to the Terms & Conditions').check();

    await page.getByRole('button', {name:'Submit'}).click();

    let errorMessages = await page.getByRole('alert').allInnerTexts();

    await expect(errorMessages).toStrictEqual([
  'First name is required.',
  'Phone is required.',
  'Please select your gender.',
  'Password is required.',
  'Please confirm your password.',
  'You must accept the Terms & Conditions.',
  ''
]);
    await page.waitForTimeout(10000);
});