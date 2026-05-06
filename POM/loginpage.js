// import fs from "fs"
// let f=fs.readFileSync("C:/Users/ravi1/Desktop/Project_Suite_CRM/test_data/test_data.json")
// let fi=JSON.parse(f)
import file from "../test_data/test_data.json"
class loginpage{
    constructor(page){
        this.username=page.locator('#loginUsername')
        this.password=page.locator('#loginPassword')
        this.loginbtn=page.locator("//button[contains(.,'Login')]")
    }

    async login(){
        await this.username.fill(file.username)
        await this.password.fill(file.password)
        await this.password.press('Enter')
    }

    async loginWithButton(){
        await this.username.fill(file.username)
        await this.password.fill(file.password)
        await this.loginbtn.click()
    }
}
export default loginpage