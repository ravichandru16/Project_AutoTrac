import { randomnumgen } from '../genericmethods/mathfunctions.js'
import {expect} from "@playwright/test"
import {excelutils} from "../genericmethods/readdatafromexcel.js"
class contactpage{
    constructor(page){
        this.createcontactbtn=page.locator("//button[contains(.,'New Contact')]")
        this.cname=page.locator("#contactName")
        this.cphone=page.locator("#contactPhone")
        this.savebtn=page.getByRole('button',{name:' Save Contact'})
    }

    async createcontact()
    {
        await this.createcontactbtn.click()
        await this.cname.fill('ravi')
        await this.cphone.fill(`${randomnumgen()}678909`)
        await this.savebtn.click()
    }
    async createcontactwithout()
    {
        await this.createcontactbtn.click()
        await this.savebtn.click()
    }

}
export default contactpage