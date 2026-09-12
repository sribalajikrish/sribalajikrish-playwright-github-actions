import { test, expect } from '@playwright/test';

test('Prove API was mocked', async ({ page }) => {

    await page.route('**/api/learning/userCreation', async route => {

        await route.fetch({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify({
                message: 'Internal Server Error'
            })
        });

    });

    const response = await page.goto(
        'https://6a8be71963f113bab0b7a68e.mockapi.io/api/learning/userCreation'
    );

    expect(response.status()).toBe(500);

    expect(
        response.headers()['content-type']
    ).toContain('application/json');

    const responseBody = await response.json();

    expect(responseBody).toEqual({
        message: 'Internal Server Error'
    });
});