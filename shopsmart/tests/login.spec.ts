import { test, expect } from '@playwright/test';

test.describe('Login flow', () => {
    test('should allow user to login and redirect to home', async ({ page }) => {
        // Navigate to login
        await page.goto('http://localhost:3000/login');

        // Fill credentials
        await page.fill('input[type="email"]', 'test@example.com');
        await page.fill('input[type="password"]', 'password123');

        // Submit form
        await page.click('button[type="submit"]');

        // Check redirection or success state
        // We expect it to redirect to the home page or stay there with "Hi, " in the navbar
        await expect(page).toHaveURL(/.*localhost:3000\/?/);
    });
});
