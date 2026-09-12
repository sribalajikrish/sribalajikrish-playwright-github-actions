import { test } from '@playwright/test';

test.beforeAll(async () => {
    console.log('>>> BEFORE ALL');
});

test.beforeEach(async () => {
    console.log('>>> BEFORE EACH');
});

test.afterEach(async () => {
    console.log('>>> AFTER EACH');
});

test.afterAll(async () => {
    console.log('>>> AFTER ALL');
});

test('Test 1', async ({ page }) => {
    console.log('>>> TEST 1');
});

test('Test 2', async ({ page }) => {
    console.log('>>> TEST 2');
});