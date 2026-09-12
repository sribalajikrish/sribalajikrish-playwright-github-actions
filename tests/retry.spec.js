// import { test,expect } from '@playwright/test';

// let count = 0;

// test('Retry Demo', async () => {

//     count++;

//     console.log(`Attempt ${count}`);

//     expect(count).toBe(3);

// });

// import { test, expect } from '@playwright/test';

// test('Retry Demo', async ({}, testInfo) => {

//     console.log(`Current retry: ${testInfo.retry}`);

//     expect(testInfo.retry).toBeGreaterThan(0);

// });

// import { test, expect } from '@playwright/test';

// test('Retry Demo', async ({}, testInfo) => {

//     console.log(`Retry number: ${testInfo.retry}`);

//     if (testInfo.retry === 0) {
//         expect(false).toBe(true);
//     }

//     expect(true).toBe(true);
// });

import { test, expect } from '@playwright/test';

test('Test A', async ({}, testInfo) => {
    console.log(`Test A - Retry: ${testInfo.retry}`);
});

test('Test B - Flaky', async ({}, testInfo) => {
    console.log(`Test B - Retry: ${testInfo.retry}`);

    if (testInfo.retry === 0) {
        expect(false).toBe(true);
    }
});

test('Test C', async ({}, testInfo) => {
    console.log(`Test C - Retry: ${testInfo.retry}`);
});