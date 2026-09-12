import { test } from '@playwright/test';

test.beforeAll(async () => {
    console.log('beforeAll');
});

test.beforeEach(async () => {
    console.log('beforeEach');
});

test.afterEach(async () => {
    console.log('afterEach');
});

test.afterAll(async () => {
    console.log('afterAll');
});

test('Test A', async () => {
    console.log('Test A');
});

test('Test B', async () => {
    console.log('Test B');
});