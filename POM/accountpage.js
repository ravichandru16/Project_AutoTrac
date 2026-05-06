class accountpage{
    constructor(page)
    {
        this.createbtn=page.locator("//button[contains(.,'New Account')]")
        this.savebtn=page.locator("#accountSaveBtn")
    }

    async createaccwithout()
    {
        await this.createbtn.click()
        await this.savebtn.click()
    }
}
export default accountpage