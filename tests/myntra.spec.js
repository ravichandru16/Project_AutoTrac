import {test,expect} from "@playwright/test"

test.setTimeout(60000)
test.only("myntra",async({page})=>{
   // await page.setDefaultTimeout(60000)
    await page.goto("https://www.myntra.com/")
    await page.locator("//a[.='Men']").hover()
    await page.locator("//a[.='T-Shirts']").first().click()

    await page.locator("//input[@value='Tshirts']/..").click()
  //  await page.waitForURL("https://www.myntra.com/men-tshirts?f=Categories%3ATshirts")
    await page.locator("//input[@value='Roadster']/..").click()
    await page.waitForTimeout(3000)
   // await page.waitForSelector("//div[@class='filter-summary-filter']")
   // await page.pause()
    await page.locator("#rootRailThumbLeft").hover()
    await page.mouse.down({clickCount:1})
    await page.mouse.move(90,0)
    await page.mouse.up()
    await page.waitForTimeout(5000)
   // await page.waitForSelector("//div[@class='filter-summary-filter']")

    await page.locator("#rootRailThumbRight").hover()
    await page.mouse.down({clickCount:1})
    await page.mouse.move(120,0)
    await page.mouse.up()
    await page.waitForTimeout(5000)
   //await page.waitForSelector("//div[@class='filter-summary-filter']")

    await page.locator("//span[@data-colorhex='black']/..").click()
    await page.locator("//input[@value='50.0 TO 100.0']/..").click()

    
    let [page2]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//ul/li[@class='product-base']").first().click()
    ])
        //await page2.setDefaultTimeout(60000)
        await page2.locator("//div[@class='size-buttons-buttonContainer']/button[not(contains(@class,'disabled'))]").first().click()
       
        await page2.waitForSelector("//div[.='ADD TO BAG']")
        await page2.locator("//div[.='ADD TO BAG']").click()
        await page2.locator("//h3[.='SIMILAR PRODUCTS']").scrollIntoViewIfNeeded()
        
        let [page3]=await Promise.all(
            [
                page2.waitForEvent('popup'),
                page2.locator("//div[@class='similar-container']//picture/img").first().click()
            ]
        )
        //await page3.setDefaultTimeout(60000)
        //await page3.waitForLoadState('load')
        await page3.locator("//div[@class='size-buttons-buttonContainer']/button[not(contains(@class,'disabled'))]").first().click()
       
       // await page3.setDefaultTimeout(60000)
       await page3.waitForSelector("//div[.='ADD TO BAG']")
        await page3.locator("//div[.='ADD TO BAG']").click()
       // await page3.setDefaultTimeout(60000)
        await page3.locator("//a/span[.='GO TO BAG']").click()

        await page3.waitForSelector("//button/div[.='PLACE ORDER']")
        await page3.screenshot({path:`./screenshots/proof1.png`})
        await page3.locator("//div[@class='item-base-item  ']//*[name()='svg' and @class='itemContainer-base-closeIcon']").last().click()

        await page3.getByRole('button',{name:'REMOVE'}).last().click()

        await page3.screenshot({path:"./screenshots/proof2.png"})
        //await page3.pause()
        await page3.click("//div[.='ENTER PIN CODE']")

        await page3.fill('#pincode',"560078")
        await page3.locator("//div[.='CHECK']").last().click()

        console.log(await page3.locator("//span[@class='itemComponents-base-highlightedMessage  ']").textContent())
        console.log(await page3.locator("//span[@class='priceDetail-base-redesignRupeeTotalIcon']/..").textContent())


})

test("irctc",async({page})=>{
    await page.goto("https://www.irctc.co.in/nget/train-search")
    await page.locator("//input[@role='searchbox']").first().fill("Bengaluru")
    await page.waitForTimeout(3000)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await page.locator("//input[@role='searchbox']").last().fill("Mumbai")
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')

    await page.click("//span[@class='ng-tns-c69-9 ui-calendar']/input")
    if(await page.locator("//div/span[.='July']").isVisible())
    {

    }
    else
    {
        await page.click("//span[@class='ui-datepicker-next-icon pi pi-chevron-right ng-tns-c69-9']")
    }

    await page.click("//a[.='20']")
    await page.locator("//div[@class='ui-dropdown-label-container ng-tns-c76-10']/span").click()
    await page.locator("//span[.='AC 2 Tier (2A)']").click()
   
    await page.getByRole('button',{name:" Search Trains "}).click()
    await page.waitForSelector("//div[@class='col-sm-5 col-xs-11 train-heading']/strong")

    let tname=await page.locator("//div[@class='col-sm-5 col-xs-11 train-heading']/strong").allTextContents()
    let ttime=await page.locator("//span[@class='time']/strong").allTextContents()

   for(let t of tname)
   {
    await page.click(`//div[@class='col-sm-5 col-xs-11 train-heading' and contains(.,'${t}')]/../../../..//strong[.='AC 2 Tier (2A)']/../..`)
    await page.waitForSelector(`//div[@class='col-sm-5 col-xs-11 train-heading' and contains(.,'${t}')]/../../../..//strong[contains(.,'₹')]`)
   }
    
    let tprice=await page.locator("//span[@class='ng-star-inserted']/strong").allTextContents()

    for(let i=0;i<tname.length;i++)
    {
        console.log(await tname[i])
        console.log(await ttime[i])
        console.log(await tprice[i])
    }
})

test("irctc-1",async({page})=>{
    await page.goto("https://www.irctc.co.in/nget/train-search")
    
    await page.fill("//span[@class='ng-tns-c68-7 ui-autocomplete ui-widget']/input",'Bengaluru')
    
    // await page.getByPlaceholder("User Name").fill("Ravichandiran16")
    // await page.getByPlaceholder("Password").fill("Ravi161021#")
    // await page.getByRole('button',{name:'SIGN IN'}).click()

    await page.fill("//span[@class='ng-tns-c68-7 ui-autocomplete ui-widget']/input",'Bengaluru')
   

   // await page.fill("//span[@class='ng-tns-c68-7 ui-autocomplete ui-widget']/input",'Bengaluru')
    await page.waitForSelector("//li/span[@class='ng-star-inserted' and contains(.,'KSR')]")
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    
    await page.fill("//span[@class='ng-tns-c68-8 ui-autocomplete ui-widget']/input",'Mumbai')
    
    //await page.click("//a[contains(@class,'fa fa-window-close pull-right loginCloseBtn')]")
    

    //await page.fill("//span[@class='ng-tns-c68-8 ui-autocomplete ui-widget']/input",'Mumbai')
    await page.waitForSelector("//ul[@role='listbox']")
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')


    
    await page.click("//span[@class='ng-tns-c69-9 ui-calendar']/input")

// await page.click("//a[contains(@class,'fa fa-window-close pull-right loginCloseBtn')]") 
    

    if(await page.locator("//div/span[.='July']").isVisible())
    {

    }
    else
    {
        await page.click("//span[@class='ui-datepicker-next-icon pi pi-chevron-right ng-tns-c69-9']")
    }

    await page.click("//a[.='20']")
    await page.locator("//div[@class='ui-dropdown-label-container ng-tns-c76-10']/span").click()
    await page.locator("//span[.='AC 2 Tier (2A)']").click()

    await page.getByRole('button',{name:' Search Trains '}).click()
    await page.waitForTimeout(5000)

    let ti=await page.locator("//span[@class='time']/strong").allTextContents()
   
    let times=[]
    for(let t of ti)
    {
        let temp=t.replace('|','')
        times.push(temp.replace(':','.'))
    }

    let time=times.map(Number)
    
    console.log(times)
    console.log(time)

})
