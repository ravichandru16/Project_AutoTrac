import {test,expect}  from "@playwright/test";

test("regress suite",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    await expect(page.locator('h6', { hasText: 'Dashboard' })).toBeVisible()
    await console.log("Regression suite got exexuted")
})