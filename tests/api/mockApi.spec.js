import { test, expect } from '@playwright/test';

test('Network Interception - Continue', async ({ page }) => {


    await page.route('**/api/**', async route => {
        const request = route.request();

        console.log('Original Request URL:', request.url());
        console.log('Original Headers:', request.headers());
        console.log('Original Method:', request.method());
        const headers = {
            ...request.headers(),
            'x-test-mode': 'playwright'
        };

        await route.continue({
            headers
        });
        await route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                id: 101,
                name: 'Sri',
                role: 'QA Manager'
            })
        });

    console.log('Modified Headers:', headers);
    const resp = request.response();
    console.log('Response : ', request.response());
});

await page.goto('https://6a8be71963f113bab0b7a68e.mockapi.io/api/learning/userCreation');

});