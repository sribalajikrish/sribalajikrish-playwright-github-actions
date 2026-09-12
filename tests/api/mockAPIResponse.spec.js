import { test, expect } from '@playwright/test';

test('Prove API was mocked', async ({ page }) => {

    await page.route('**/api/learning/userCreation', async route => {
        const response = await route.fetch();
        const jsonResponse = await response.json();
        console.log('Before Modify Response : ', JSON.stringify(jsonResponse, null, 2));
        const body = await response.json();
        body[0].name = 'Sri Balaji';

        // Return modified response
        await route.fulfill({
            response,
            body: JSON.stringify(body)
        });

    });

    const response = await page.goto(
        'https://6a8be71963f113bab0b7a68e.mockapi.io/api/learning/userCreation'
    );
    const jsonResponse = await response.json();
    console.log('After Modify Response : ', JSON.stringify(jsonResponse, null, 2));

});