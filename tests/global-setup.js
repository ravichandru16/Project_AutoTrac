const {test:setup,expect}=require('@playwright/test')
const path = require('path')

const setupfile=path.join(__dirname,"../playwright/setupfile.json")
require('dotenv').config({path:path.join(__dirname,`../test_data/.env.${process.env.ENV}|| dev`)})
setup("global setup",async({browser})=>{
   let context=await browser.newContext()
   let page=await context.newPage()
   await page.goto(process.env.BASE_URL)
   await page.fill("input[name='username']",process.env.USER_NAME)
   await page.fill("input[name='password']",process.env.PASSWORD)
   await page.getByRole('button',{name:'Login'}).click()

   await page.waitForLoadState('networkidle')
   await context.storageState({path:setupfile})
 
})