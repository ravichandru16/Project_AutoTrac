import { randomnumgen } from "../genericmethods/mathfunctions"
import homepage from "../POM/homepage"
import {expect} from "@playwright/test"
import ExcelUtils from "../genericmethods/readdatafromexcel.js"
class leadspage{
    constructor(page)
    {
        this.page = page
        this.createbtn=page.getByRole('button',{name:'New Lead'})
        this.firstname=page.locator("#leadFirstName")
        this.lastname=page.locator('#leadLastName')
        this.phone=page.locator('#leadPhone')
        this.vehicle=page.locator('#leadVehicle')
        this.leadsrc=page.locator("#leadSource")
        this.leadrating=page.locator('#leadRating')
        this.savebtn=page.locator('#leadSaveBtn')
        this.excelUtils = new ExcelUtils()

        this.ran=randomnumgen()
    }

    getLeadRowByPhone(phone){
        return this.page.locator('tr', { hasText: `${phone}` })
    }

    getOpportunityButtonByPhone(phone){
        return this.getLeadRowByPhone(phone).getByRole('button',{name:'Opportunity'}).first()
    }

    getLeadIdByPhone(phone){
        return this.getLeadRowByPhone(phone).locator('td', { hasText: 'LEAD' }).first()
    }

    async createlead(page)
    {
        await this.createbtn.click()
        await this.firstname.fill('DOM')
        await this.lastname.fill("R")
        await this.phone.fill(`${this.ran}`)
        await this.vehicle.selectOption('Honda City')
        await this.leadsrc.selectOption('Walk-in')
        await this.leadrating.selectOption('Hot')
        await this.savebtn.click()
        const leadid = await this.fetchLeadIdByPhone(this.ran)
        await this.getOpportunityButtonByPhone(this.ran).click()
        const home=new homepage(page)
        await home.opportunities()
        await expect((await page.locator('tbody#opportunityTable tr').last().textContent())).toContain(leadid)
    }

    async fetchleadid(){
        return this.fetchLeadIdByPhone(this.ran)
    }

    async fetchLeadIdByPhone(phone){
        return await this.getLeadIdByPhone(phone).textContent()
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
        await this.getLeadRowByPhone(this.ran).waitFor({ state: 'visible', timeout: 10000 })
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