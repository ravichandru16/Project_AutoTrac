import {test as setup} from "@playwright/test"
import path from "path"


const authfile=path.join(__dirname,"../playwright/.auth/user.json")

setup("authendication",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator('#username').fill('student')
    await page.locator('#password').fill('Password123')
    await page.getByRole('button',{name:'Submit'})

    await page.context().storageState({path:authfile})
})