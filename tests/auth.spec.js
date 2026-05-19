import {test as setup} from "@playwright/test"
import path from "path"

require('dotenv').config({path:path.join(__dirname,`../test_data/.env.${process.env.ENV}`)})
const authfile=path.join(__dirname,"../playwright/user.json")

setup("authentication",async({browser})=>{
    let context=await browser.newContext()
    let page=await context.newPage()
    
    await page.goto(process.env.BASE_URL)
    await page.getByPlaceholder('Username').fill(process.env.USER_NAME)
    await page.getByPlaceholder('Password').fill(process.env.PASSWORD)
    await page.getByRole('button',{name:' Login '}).click()

    await page.waitForLoadState('networkidle')
    await context.storageState({path:authfile})
})