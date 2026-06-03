const {test:base}=require('@playwright/test')
const path = require('path')
require('dotenv').config({path:path.join(__dirname,`../../test_data/.env.${process.env.ENV}`)})
export const test=base.extend({
    login:async({page},use)=>{
        await page.goto(process.env.BASE_URL)
        await page.fill("input[name='username']",process.env.USER_NAME)
        await page.fill("input[name='password']",process.env.PASSWORD)
        await page.getByRole('button',{name:'Login'}).click()
        await use(page)
    }
})
export {expect} from "@playwright/test"