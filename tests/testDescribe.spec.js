import { test } from '@playwright/test';

console.log('File Started');

test.describe('Login Module', () => {

    console.log('Inside Login Suite');

    test('Valid Login', async () => {
        console.log('Executing Valid Login');
    });

    test('Invalid Login', async () => {
        console.log('Executing Invalid Login');
    });

});

console.log('File Ended');