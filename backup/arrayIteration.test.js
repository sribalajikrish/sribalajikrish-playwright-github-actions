import { test, expect } from '@playwright/test';

test('Login', async () => {
const playwright = require('playwright');
const selectBrowser = [
    "chromium",
    "firefox",
    "webkit"
];
var browserType;

for (const browserType of selectBrowser ){

  const browser = await playwright[browserType].launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com');
  await browser.close();
  console.log(`Running on ${browserType}`);
  }
});