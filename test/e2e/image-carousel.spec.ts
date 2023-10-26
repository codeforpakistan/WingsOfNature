import { test, expect } from "@playwright/test";

test.describe("Image Carousel", () => {
    test("it navigates to next image on next image button click", async ({ page }) => {
        await page.goto("/p/0", { waitUntil: "networkidle" });

        await page.locator('[aria-label="go to image"]').nth(1).click();

        await page.waitForURL("/p/1");

        await expect(page).toHaveURL("/p/1");
    });
});
