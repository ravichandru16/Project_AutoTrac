import file from "../test_data/test_data.json"
import loginpage from '../POM/loginpage'
import homepage from '../POM/homepage.js'
import leadspage from '../POM/leadspage.js'
import contactpage from '../POM/contactpage.js'
import { expect, test} from '@playwright/test'
import testdrive from "../POM/testdrivepage.js"
import accountpage from "../POM/accountpage.js"


//test.use({storageState:{cookies:[],origin:[]}})

// test.beforeAll('connect to DB',async()=>{
//     console.log('DB connected')
// })
// test.afterAll('disconnect DB',async()=>{
//     console.log('DB disconnected')
// })

//  test.beforeEach('login',async({page})=>{
//  await page.goto(file.url);

// await page.getByRole('textbox', { name: 'Username' }).fill('admin');
// await page.getByRole('textbox', { name: 'Password' }).fill('password');
// await page.getByRole('button', { name: '🔐 Login' }).click();
// await expect(page.locator('#dashboard')).toContainText('Dashboard');
 //})

// test.afterEach('logout',async({page})=>{
//     await page.goto(file.url)
//     await page.locator("div[class='user-avatar']").hover()
// page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     dialog.accept();
//   });
//   await page.getByRole('button', { name: 'Logout' }).click();
// })



//TS-1
test('login & logout',async({page})=>{
    await page.goto(file.url)   
    let login=new loginpage(page)
    let home=new homepage(page)
    //await page.on('dialog',(dialog)=>{dialog.accept()})
    //login function
    await login.login()
    await expect(page.locator("//button[contains(.,'Dashboard')]")).toBeAttached()
    console.log('home page displayed')
    await page.waitForTimeout(6000)
    //logout funtion
    await home.logout(page)
    await expect(login.loginbtn).toBeVisible()
    console.log('logged out successfully')
    await page.pause()
    await page.mouse.click({})
})


test.describe('@smoke suite',async()=>{
    //TS-2
test('hot leads converting into opportunities',async({page})=>{
    // await page.goto(file.url)
    // let login=new loginpage(page)
    let home=new homepage(page)
    let leads=new leadspage(page)
    //login.login()
    home.leads()
    leads.createlead(page)
    await page.pause()
    await page.mouse.click({button:'left'})
   // home.logout(page)
})

//TS-3
test.fail("create leads with duplicate mobile no",async({page})=>{
    // await page.goto(file.url)
    // let login=new loginpage(page)
    let home=new homepage(page)
    let leads=new leadspage(page)
    //login.login()
    home.leads()
    leads.createlead()
    await page.pause()
    leads.createlead()
   // home.logout()
})
})

//TS-4
test("created contact",async({page})=>{
    // await page.goto(file.url)
    // let login=new loginpage(page)
     let home=new homepage(page)
     let contact= new contactpage(page)
    // await login.login()
    await home.contacts()
    await contact.createcontact(page)
    const lastContactText = await page.locator("//tbody[@id='contactTable']/tr").last().textContent();
    await expect(lastContactText).toContain('hello')
   // await home.logout(page)
    await page.pause()
})

//TS-5
test.fail("create contact without mandtory fields",async({page})=>{
    // await page.goto(file.url)
    // let login=new loginpage(page)
    let home=new homepage(page)
    let contact=new contactpage(page)

    //await login.login()
    await home.contacts()
    await contact.createcontactwithout()
    await page.pause()
    await home.logout()
})
//TS-6
test("create lead with mandtory fields",async({page})=>{
    //await page.goto(file.url)  
   // let login=new loginpage(page)
    let home=new homepage(page)
    let lead=new leadspage(page)
    
   // await login.login()
    await home.leads()
    await lead.createleadwithmand(page)
    //let leadid=await lead.fetchleadid()

   //console.log(Object.values(leadid))
    console.log("lead converted succfully")
})

test('login, create lead with mandatory fields, validate creation, and logout', async ({ page }) => {
    await page.goto(file.url)
    const login = new loginpage(page)
    const home = new homepage(page)
    const lead = new leadspage(page)

    await login.login()
    await expect(page.locator("//button[contains(.,'Leads')]")).toBeVisible()

    await home.leads()
    const leadPhone = await lead.createleadwithmand(page)

    await expect(page.locator(`//td[contains(.,'${leadPhone}')]`)).toBeVisible({ timeout: 10000 })

    await home.logout(page)
    await expect(login.loginbtn).toBeVisible()
})

//TS-7
test("creating testdrive for created leads",async({page})=>{
   // await page.goto(file.url)
    let home=new homepage(page)
    //let login= new loginpage(page)
    let td=new testdrive(page)

    //await login.login()
    await home.testdrive()
    await td.createtestdrive()
})

//TS-8
test("handling windows(switching)",async({page})=>{
   // await page.goto(file.url)
   // let login=new loginpage(page)
    let home=new homepage(page)
   // await login.login()
    let [p2]=await Promise.all([page.waitForEvent('popup'),
     home.about()
    ])
    //await page.pause()
    let newpage=p2
    await newpage.locator("//a[.='Open CRM Prototype']").click()
})

//TS-9
test("create a lead and send a e brouchure",async({page})=>{
    //await page.goto(file.url)
    let lead=new leadspage(page)
    //let login=new loginpage(page)
    let home=new homepage(page)
  //  await login.login()
    await home.leads()
    await lead.createleadwithmand()
    await home.brouchurepage(page)
})

//TS-10
test.fail("creating account without account name",async({page})=>{
    //await page.goto(file.url)
    //let login=new loginpage(page)
    let home=new homepage(page)
    let account=new accountpage(page)

    //await login.login()
    await home.account()
    await account.createaccwithout()
    await expect(page.locator("//div[@id='toast' and contains(.,'✓ Account created!')]")).toBeVisible()
    console.log("bug")
    await page.pause()
})

test('simple',async({page})=>{
   let home=new homepage(page)
    await page.pause()
    await home.account()
  
})

test('Create lead with multiple data set',async({page})=>{
    // let home=new homepage(page)
    // await home.leads()
    // let lead=new leadspage(page)
    // await lead.createmulti(page)
    await page.goto("https://www.flipkart.com/")
    await page.pause()
    
})

test.only("session storage",async({page})=>{
    
    console.log("session stoarge");
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
   await page.pause()
})

test("env task",async({page})=>{
    await page.goto('/')
})



