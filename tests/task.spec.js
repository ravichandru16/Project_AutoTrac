import {test,expect} from "@playwright/test"

test("task1",async({page})=>{
    await page.goto("https://www.flipkart.com/")
    await page.locator("//span[@role='button']").click()
   // await page.locator("//input[@title='Search for Products, Brands and More']").click()
    await page.locator("//input[@title='Search for Products, Brands and More']").first().fill("mobile")
    await page.keyboard.press('Enter')
    //await page.pause()
    await page.waitForTimeout(4000)
    await page.getByTitle('MOTOROLA').click()
   // await page.mouse.click()
    await page.waitForLoadState('load')
    
    await page.locator("//div/div[.='Internal Storage']").scrollIntoViewIfNeeded()
    
    await page.locator(".lPYKVv.jVLYlZ>div").click()
    await page.locator(".egvN4t").click()
    await page.waitForLoadState('load')
    //await page.pause()
    let [page2]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//div[@class='RG5Slk' and contains(.,'g06')]").first().click()
    ])

    await page2.locator("//a[@href='/supercoin?param=765678']").scrollIntoViewIfNeeded()
    await page2.locator("//*[name()='g' and @clip-path='url(#AddToCart_a)' ]/../../..").first().click()

    await page2.locator("//a[@href='/supercoin?param=765678']").scrollIntoViewIfNeeded()
    await page2.locator("//*[name()='g' and @clip-path='url(#AddToCart_a)' ]/../../..").first().click()

    await expect(page2.locator("//a[@title='Cart']//span[.='1']").isVisible()).toBeTruthy()
    console.log("Product added to cart")
 })

 //test("")

 test.only("simple",async({page})=>{
    const response = await openai.responses.create({
  model: "gpt-5",
  input: "Generate login test cases"
});
 })
