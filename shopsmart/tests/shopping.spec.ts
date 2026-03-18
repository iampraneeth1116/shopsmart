import { test, expect } from '@playwright/test';

test.describe('Shopping flow', () => {
    test('should allow user to browse products and add to cart', async ({ page }) => {
        // Navigate to products
        await page.goto('http://localhost:3000/products');

        // Check if products load
        await expect(page.locator('text=Quick Add').first()).toBeVisible({ timeout: 10000 });

        // Click quick add on first product
        await page.click('text=Quick Add >> nth=0');

        // Wait for item to be added to cart and UI to update
        await expect(page.locator('text=Added')).toBeVisible();

        // Check cart indicator
        const cartIndicator = page.locator('nav a[href="/cart"] span');
        await expect(cartIndicator).toBeVisible();
    });
});
