import {test,expect} from "@playwright/test"
import fs from "fs"

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

    fs.writeFileSync()
 })

 //test("")

 test("simple",async({page})=>{
    const response = await openai.responses.create({
  model: "gpt-5",
  input: "Generate login test cases"
});
 })


test("broken links",async({page,request})=>{
  await page.setViewportSize({width:1920,height:720})
  await page.goto("https://testautomationpractice.blogspot.com/")

  let links=await page.locator("//a").evaluateAll(element=>element.map(el=>el.href))

  for(let link of links)
  {
    if(!link || !link=='/'|| !link.startsWith('http'))continue

    try{
      let res=await request.get(link)

    if(res.status()>=400)
    {
      console.log(`${link} is a broken link`)
    }
    else
    {
      console.log(`${link} is not a broken link`)
    }
  }
  catch(error)
{
  console.log(`${link} is not a link`)
}
}

})
