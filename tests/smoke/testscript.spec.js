import { test, expect } from './loginfix.js';

test('smoke suite', async ({ login }) => {
  await expect(login.locator("//h6[.='Dashboard']").isVisible()).toBeTruthy();
  console.log('smoke suite successfully executed');
});