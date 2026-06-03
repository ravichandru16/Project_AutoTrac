class accountpage{
    constructor(page)
    {
        this.createbtn=page.getByRole('button',{name:'New Account'})
        this.savebtn=page.locator("#accountSaveBtn")
    }

    async createaccwithout()
    {
        await this.createbtn.click()
        await this.savebtn.click()
    }
}
export default accountpage