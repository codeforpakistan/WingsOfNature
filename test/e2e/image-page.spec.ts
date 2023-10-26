import { test, expect } from "@playwright/test";

test.describe("Image Page", () => {
    test("it matches snapshot", async ({ page }) => {
        await page.goto("/p/0");

        //wait for transition of buttons (max 500ms)
        await page.waitForTimeout(1000);

        expect(await page.screenshot()).toMatchSnapshot();
    });
});
