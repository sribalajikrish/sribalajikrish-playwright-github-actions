import { test, expect } from '../fixtures/auth.fixture.js';


test('Storage State', async ({ adminPage}) => {
  await adminPage.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');
  await (expect(adminPage.locator('h6').first()).toHaveText('Recruitment'));
});