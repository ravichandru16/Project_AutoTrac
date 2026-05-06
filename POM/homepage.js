import leadspage from "./leadspage"

class homepage{
    constructor(page)
    {
        this.profile=page.locator("//div[@class='profile-menu']")
        this.logoutbtn=page.locator("//button[.='Logout']")
        this.leadsbtn=page.locator("//button[contains(.,'Leads')]")
        this.contactbtn=page.locator("//button[contains(.,'Contacts')]")
        this.accountbtn=page.locator("//button[contains(.,'Accounts')]")
        this.opportunitiesbtn=page.locator("//button[contains(.,'Opportunities')]")
        this.testdrivebtn=page.locator("//button[contains(.,'Test Drives')]")
        this.aboutus=page.locator("//a[contains(.,'about ')]")
        this.brouchure=page.locator("//button[contains(.,'E-Brochure')]")

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