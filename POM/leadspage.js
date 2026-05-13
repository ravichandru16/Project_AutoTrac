import { randomnumgen } from "../genericmethods/mathfunctions"
import homepage from "../POM/homepage"
import {expect} from "@playwright/test"
import ExcelUtils from "../genericmethods/readdatafromexcel.js"
class leadspage{
     
    constructor(page)
    {
        this.createbtn=page.locator("//button[contains(.,'New Lead')]")
        this.firstname=page.locator("#leadFirstName")
        this.lastname=page.locator('#leadLastName')
        this.phone=page.locator('#leadPhone')
        this.vehicle=page.locator('#leadVehicle')
        this.leadsrc=page.locator("#leadSource")
        this.leadrating=page.locator('#leadRating')
        this.savebtn=page.locator('#leadSaveBtn')
        this.excelUtils = new ExcelUtils()

        this.ran=randomnumgen()
        this.clickoppo=page.locator(`//td[contains(.,'${this.ran}')]/following-sibling::td/div/button[contains(.,'Opportunity')]`)
        this.leadid=page.locator(`//td[contains(.,'${this.ran}')]/preceding-sibling::td[contains(.,'LEAD')]`).last()
    }
    async createlead(page)
    {
        //let d=new dataex()
        await this.createbtn.click()
        await this.firstname.fill('DOM')
        await this.lastname.fill("R")
       
        await this.phone.fill(`${this.ran}`)
        await this.vehicle.selectOption('Honda City')
        await this.leadsrc.selectOption('Walk-in')
       
        await this.leadrating.selectOption('Hot')
        await this.savebtn.click()
        let leadid=await this.fetchleadid()
        await this.clickoppo.click()
        let home=new homepage(page)
        await home.opportunities()
        await expect((await page.locator(`//tbody[@id='opportunityTable']/tr`).last().textContent())).toContain(leadid)
        
    }

    async fetchleadid(){
        return await this.leadid.textContent()
    }

    async createleadwithmand(page)
    {
        await this.createbtn.click()
        await this.firstname.fill("chandru")
        await this.lastname.fill("R")
       
        await this.phone.fill(`${this.ran}`)
        await this.vehicle.selectOption('Honda City')
        await this.leadsrc.selectOption('Walk-in')
       
        await this.leadrating.selectOption('Hot')
        await this.savebtn.click()
        await page.locator(`//td[contains(.,'${this.ran}')]`).waitFor({ state: 'visible', timeout: 10000 })
        console.log('lead created successfully')
        return this.ran
    }

    async createmulti(page)
    {
        const data = await this.excelUtils.readDataFromExcel()
        for (const d of data) {
            await this.createbtn.click()
            await this.firstname.fill(d.fname)
            await this.lastname.fill(d.lname)
            await this.phone.fill(d.mobile.toString())
            await this.vehicle.selectOption('Hyundai Creta')
            await this.leadsrc.selectOption('Website')
            await this.leadrating.selectOption('Cold')
            await this.savebtn.click()
           await page.waitForLoadState('load')
           
        }
    }
}
export default leadspage