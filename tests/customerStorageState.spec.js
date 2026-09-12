import { test, expect } from '../fixtures/auth.fixture.js';


test('Storage State', async ({ customerPage }) => {
  await customerPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');
  await (expect(customerPage.locator('h6').first()).toHaveText('Recruitment'));
});