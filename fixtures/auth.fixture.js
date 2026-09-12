// fixtures/auth.fixture.js
import { test as base } from '@playwright/test';

export const test = base.extend({
  // Fixture for an isolated Admin Page
  adminPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: '.auth/admin.json' });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },

  // Fixture for an isolated Customer Page
  customerPage: async ({ browser }, use) => {
    const context = await browser.newContext({ storageState: '.auth/customer.json' });
    const page = await context.newPage();
    await use(page);
    await context.close();
  },
});

export { expect } from '@playwright/test';
