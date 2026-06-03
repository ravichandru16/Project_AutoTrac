import leadspage from "./leadspage"

class homepage{
    constructor(page)
    {
        this.page = page
        this.profile=page.locator('.profile-menu')
        this.logoutbtn=page.getByRole('button',{name:'Logout'})
        this.leadsbtn=page.getByRole('button',{name:'Leads'})
        this.contactbtn=page.getByRole('button',{name:'Contacts'})
        this.accountbtn=page.getByRole('button',{name:'Accounts'})
        this.opportunitiesbtn=page.getByRole('button',{name:'Opportunities'})
        this.testdrivebtn=page.getByRole('button',{name:'Test Drives'})
        this.aboutus=page.getByRole('link',{name:/about/i})
        this.brouchure=page.getByRole('button',{name:'E-Brochure'})

    }

    async logout(page)
    {
        await this.profile.hover()
        await page.once('dialog',(dialog)=>{dialog.accept()})
        await this.logoutbtn.click()
    }
    async leads()
    {
        await this.leadsbtn.click()
    }
    async contacts()
    {
        await this.contactbtn.click()
    }
    async account()
    {
        await this.accountbtn.click()
    }
    async opportunities()
    {
        await this.opportunitiesbtn.click()
    }
    async testdrive()
    {
        await this.testdrivebtn.click()
    }
    async about()
    {
        await this.aboutus.click()
    }
    async brouchurepage(page){
        await this.brouchure.click()
        //await expect(page.locator("//tbody[@id='ebrochureTable']//td[contains(.,'')]").textContent()).toHave(new leadspage(page).ran.toString())
    }
}
export default homepage