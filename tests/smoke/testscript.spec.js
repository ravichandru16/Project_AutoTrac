import { test, expect } from './loginfix.js';

test('smoke suite', async ({ login }) => {
  await expect(login.locator('h6', { hasText: 'Dashboard' })).toBeVisible();
  console.log('smoke suite successfully executed');
});