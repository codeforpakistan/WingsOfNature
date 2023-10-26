import { test, expect } from "@playwright/test";

test.describe("Index Page", () => {
    test("it matches snapshot", async ({ page }) => {
        await page.goto("/");

        expect(await page.screenshot()).toMatchSnapshot();
    });
});
