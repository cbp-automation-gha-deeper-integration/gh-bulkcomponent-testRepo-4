import { test, expect } from '@playwright/test';

test('Open Google.com', async ({ page }) => {
  await page.goto("https://www.google.com");
  
});
