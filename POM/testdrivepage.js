class testdrive{
    constructor(page)
    {
        this.createbtn=page.getByRole('button',{name:'Schedule'})
        this.cname=page.locator("#testdriveName")
        this.cphone=page.locator('#testdrivePhone')
        this.vehicle=page.locator('#testdriveVehicle')
        this.datetime=page.locator('#testdriveDateTime')
        this.duration=page.locator('#testdriveDuration')
        this.status=page.locator('#testdriveStatus')
        this.suggestions=page.locator("#testdrivePhoneSuggestions")
        this.savebtn=page.locator("#testdriveSaveBtn")
    }

    async createtestdrive()
    {
        await this.createbtn.click()
        await this.cname.fill('deva')
        await this.cphone.fill(`9988776655`)
        await this.suggestions.click()
        await this.vehicle.fill('Honda City')
        await this.datetime.fill('2026-04-25T14:30')  // Sets date and time directly
        await this.duration.fill('30 mins')
        await this.status.fill('Scheduled')
        // Click stars for rating if needed
        await this.savebtn.click()
    }
}
export default testdrive