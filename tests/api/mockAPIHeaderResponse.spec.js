import { test, expect } from '@playwright/test';

test('Network Interception - Continue', async ({ page }) => {


    await page.route('**/api/**', async route => {
        const request = route.request();
        console.log('Before Modified Headers:', headers);
        const headers = {
            ...request.headers(),
            'x-test-mode': 'playwright'
        };
        const response = await route.fetch({ headers });

        const body = await response.json();

        console.log('Before Modify Response:',JSON.stringify(body, null, 2));

        body[0].name = 'Sri Balaji';

        await route.fulfill({
            response,
            body: JSON.stringify(body)
        });

        console.log('Modified Headers:', headers);

        console.log('After Modify Response:',JSON.stringify(body, null, 2));
    });

    await page.goto(
        'https://6a8be71963f113bab0b7a68e.mockapi.io/api/learning/userCreation'
    );

});