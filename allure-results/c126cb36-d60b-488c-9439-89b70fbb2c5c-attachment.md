# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: myntra.spec.js >> irctc-1
- Location: tests\myntra.spec.js:123:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e3]:
    - banner "Header" [ref=e4]:
      - generic [ref=e5]:
        - banner [ref=e6]:
          - generic [ref=e7]:
            - img "Indian railway logo" [ref=e9]
            - img "IRCTC Logo" [ref=e11]
          - generic [ref=e14] [cursor=pointer]: 
          - text:   
        - text:             
    - generic [ref=e20]:
      - generic [ref=e23]:
        - generic:
          - generic [ref=e24]:
            - img "Pnr Icon" [ref=e26]
            - link "PNR Status opens a new window" [ref=e27] [cursor=pointer]:
              - /url: http://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en
              - generic [ref=e28]: PNR STATUS
          - generic [ref=e29]:
            - img "Pnr Icon" [ref=e31]
            - link "Reservation Chart. Website will be opened in new tab" [ref=e32] [cursor=pointer]:
              - /url: https://www.irctc.co.in/online-charts/
              - generic [ref=e33]: CHARTS / VACANCY
        - generic [ref=e34]:
          - generic [ref=e37]: BOOK TICKET
          - generic [ref=e38]:
            - generic [ref=e39]:
              - generic [ref=e41]:
                - generic [ref=e43]: 
                - searchbox "Enter From station. Input is Mandatory." [ref=e46]: Bengaluru
                - generic "Enter From station. Input is Mandatory.": From
                - generic:
                  - generic [ref=e48] [cursor=pointer]: 
                  - text: 
              - generic [ref=e50]:
                - generic [ref=e52]: 
                - searchbox "Enter To station. Input is Mandatory." [ref=e55]: MUMBAI CENTRAL - BCT (MUMBAI)
                - generic: To
            - generic [ref=e56]:
              - generic [ref=e58]:
                - generic [ref=e60]: 
                - generic "Enter Journey Date. Formate D.D./.M.M./.Y.Y.Y.Y. Input is Mandatory." [ref=e61]:
                  - textbox [ref=e63]: 20/07/2026
                - generic: DD/MM/YYYY *
              - generic [ref=e65]:
                - generic [ref=e67]: 
                - generic [ref=e69] [cursor=pointer]:
                  - generic [ref=e70]:
                    - listbox "AC 2 Tier (2A)"
                  - generic [ref=e72]: AC 2 Tier (2A)
                  - button "" [ref=e73]:
                    - generic [ref=e74]: 
            - generic [ref=e76]:
              - generic [ref=e78]: 
              - generic [ref=e81] [cursor=pointer]:
                - generic [ref=e82]:
                  - listbox "GENERAL"
                - generic [ref=e84]: GENERAL
                - button "" [ref=e85]:
                  - generic [ref=e86]: 
            - generic [ref=e88]:
              - generic [ref=e89]:
                - checkbox "Check for DIVYAANG Concession Booking." [ref=e90]
                - generic [ref=e91] [cursor=pointer]: Person With Disability Concession
              - generic [ref=e92]:
                - checkbox "Check to fetch trains runs on other days than you are searching for." [ref=e93]
                - generic [ref=e94] [cursor=pointer]: Flexible With Date
              - generic [ref=e95]:
                - checkbox "Check for pass Booking" [ref=e96]
                - generic [ref=e97] [cursor=pointer]: Railway Pass Concession
            - button "Search Trains" [active] [ref=e100] [cursor=pointer]
        - region [ref=e101]
      - generic [ref=e103]:
        - generic [ref=e104]: INDIAN RAILWAYS
        - text: SafetySecurityPunctuality
      - iframe [ref=e109]:
        - link [ref=f18e2] [cursor=pointer]:
          - /url: https://googleads.g.doubleclick.net/pcs/click?xai=AKAOjss57MuULjF4gYviFn27Y4nlQsDHYhoaiyNUC0VBl4xGNlniAhQrok7kUtwOvlNfpMkwqp0oVksJL5-B9e6Jt2fNfdVpZj8VI3t2umIMKi5cYgO3I72Ev8T7MisNaCa4XDU4C8KnLEfOIEz6WpbNpBAztwSv_YBUhHefTtsMZrAC38bJLfXQqgrGGlQveXAyKP-NYT3gVoVTQDRuL_32a7XnNtrcLUw4CPwPBxNRwdBhhzy-qITgMnWM4kaSGnLWg-5l62oaf-2eG841ZmQx96HxOwohxiCDlJovMCIfYU0U4QER3bQ58vL5CSGO4XwEFUmIk6rexY_qEcEGDROMTn0QlrLiR7zcKVGjKpwQVjhl0GcU7wPc0PFFkkqllBCgxVCF2aoAliO8ZzizH2PXDN-5q-VHlnSDm86Uvq_a&sai=AMfl-YQvm9gKe_ExU1g0yeNWmPc6UAAPJVD0isGWbaNv8ZBvcm0ZqLFQnKz3npsU6rACoc-8x3LA0Smg8f_y3TTn4xzn2_OV6OQmu9c0kjA57tDPNGdTsQjE0tPxz0Ijb9qqFmJTmB5JmqnxRAet5eHjmDXdWGkK5nN1NclULjTvN9_S6B7y0i5yle0QxOPTJGmGrYu4UoYrBXo_3R8RCtpm0XYQkt-ubaH0bD3UUcbFulBqIt8DsAl9Z1EXotB_rUoV4b-p7KlYUI0j_J9hqx9Zy-KUnsW1AFmwKz-AIMbt3DIN6BvZ4m_6NpCyfKgXqfd9bSrwTLAw5TxkawgTaT65muXVSvMg1mzDNr0n3DmP8QfPB4jJiufZ6ZDgvLyd9C1wkJ3kaVc_KyJRyFsc7YFELBXs-NnPKmuFuawY5yXnt0FWLXO0&sig=Cg0ArKJSzOYagDP03pFa&fbs_aeid=%5Bgw_fbsaeid%5D&adurl=https://consumeraffairs.gov.in/&nm=1
      - generic [ref=e111]:
        - heading "Have you not found the right one? Find a service suitable for you here." [level=2] [ref=e112]:
          - text: Have you not found the right one?
          - text: Find a service suitable for you here.
        - list [ref=e113]:
          - listitem [ref=e114]:
            - link "Flight opens a new window" [ref=e115] [cursor=pointer]:
              - /url: https://www.air.irctc.co.in/
              - generic [ref=e117]: FLIGHTS
          - listitem [ref=e118]:
            - link "HOTELS" [ref=e119] [cursor=pointer]:
              - /url: https://www.hotels.irctc.co.in
              - generic [ref=e121]: HOTELS
          - listitem [ref=e122]:
            - link " RAIL DRISHTI" [ref=e123] [cursor=pointer]:
              - /url: https://raildrishti.indianrailways.gov.in/
              - generic [ref=e124]: 
              - generic [ref=e125]: RAIL DRISHTI
          - listitem [ref=e126]:
            - link "E-CATERING" [ref=e127] [cursor=pointer]:
              - /url: https://www.ecatering.irctc.co.in/
              - generic [ref=e129]: E-CATERING
          - listitem [ref=e130]:
            - link " BUS" [ref=e131] [cursor=pointer]:
              - /url: https://www.bus.irctc.co.in/home
              - generic [ref=e132]: 
              - generic [ref=e133]: BUS
        - list [ref=e134]:
          - listitem [ref=e135]:
            - link "HOLIDAY PACKAGES" [ref=e136] [cursor=pointer]:
              - /url: https://www.irctctourism.com/tourpacakage_search?searchKey=&tagType=&travelType=&category=
              - generic [ref=e138]: HOLIDAY PACKAGES
          - listitem [ref=e139]:
            - link "TOURIST TRAIN" [ref=e140] [cursor=pointer]:
              - /url: https://www.irctctourism.com/bharatgaurav
              - generic [ref=e142]: TOURIST TRAIN
          - listitem [ref=e143]:
            - link "HILL RAILWAYS" [ref=e144] [cursor=pointer]:
              - /url: https://www.irctctourism.com/gallery/
              - generic [ref=e146]: HILL RAILWAYS
          - listitem [ref=e147]:
            - link "CHARTER TRAIN" [ref=e148] [cursor=pointer]:
              - /url: https://www.ftr.irctc.co.in/ftr/
              - generic [ref=e150]: CHARTER TRAIN
          - listitem [ref=e151]:
            - link "GALLERY" [ref=e152] [cursor=pointer]:
              - /url: https://www.irctctourism.com/gallery/
              - generic [ref=e154]: GALLERY
      - generic [ref=e157]:
        - heading "HOLIDAYS" [level=2] [ref=e158]
        - generic [ref=e159]:
          - generic [ref=e161]:
            - img "Maharajas Express" [ref=e163]
            - generic [ref=e164]:
              - heading "Maharajas' Express" [level=3] [ref=e165]
              - paragraph [ref=e166]: Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years.
              - link "More info about Maharaja's Express" [ref=e167] [cursor=pointer]:
                - /url: http://www.the-maharajas.com/
                - strong [ref=e168]: Read More
                - generic [ref=e169]: 
          - generic [ref=e171]:
            - img "International Packages" [ref=e173]
            - generic [ref=e174]:
              - heading "International Packages" [level=3] [ref=e175]
              - paragraph [ref=e176]: Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.
              - link "Read More " [ref=e177] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=International&sector=All
                - strong [ref=e178]: Read More
                - generic [ref=e179]: 
          - generic [ref=e181]:
            - img "Domestic Air Packages" [ref=e183]
            - generic [ref=e184]:
              - heading "Domestic Air Packages" [level=3] [ref=e185]
              - paragraph [ref=e186]: Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!
              - link "Read More " [ref=e187] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpacakage_search?searchKey=&tagType=&travelType=Domestic&sector=All
                - strong [ref=e188]: Read More
                - generic [ref=e189]: 
          - generic [ref=e191]:
            - img "Tourist Trains" [ref=e193]
            - generic [ref=e194]:
              - heading "Bharat Gaurav Tourist Train" [level=3] [ref=e195]
              - paragraph [ref=e196]: IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India’s rich cultural heritage.
              - link "Read More " [ref=e197] [cursor=pointer]:
                - /url: https://www.irctctourism.com/bharatgaurav
                - strong [ref=e198]: Read More
                - generic [ref=e199]: 
          - generic [ref=e201]:
            - img "Rail/ Land Tour Packages" [ref=e203]
            - generic [ref=e204]:
              - heading "Rail Tour Packages" [level=3] [ref=e205]
              - paragraph [ref=e206]: IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages/ Land packages to these destinations are also available.
              - link "Read More " [ref=e207] [cursor=pointer]:
                - /url: https://www.irctctourism.com/#/tourpkgs
                - strong [ref=e208]: Read More
                - generic [ref=e209]: 
    - generic [ref=e214]:
      - contentinfo [ref=e216]:
        - text: Get Connected with us on social networks
        - generic [ref=e217]:
          - link "I.R.C.T.C. Official instagram page. opens a new windows" [ref=e218] [cursor=pointer]:
            - /url: https://www.facebook.com/IRCTCofficial/
            - generic [ref=e219]: 
          - link "I.R.C.T.C. Official whatsapp page. opens a new windows" [ref=e220] [cursor=pointer]:
            - /url: https://whatsapp.com/channel/0029Va4wpCW84OmKdPNQi41P
            - img [ref=e222]
          - link "I.R.C.T.C. Official youtube page. opens a new windows" [ref=e223] [cursor=pointer]:
            - /url: https://youtube.com/c/IRCTCOFFICIAL
            - generic [ref=e224]: 
          - link "I.R.C.T.C. Official facebook page. opens a new windows" [ref=e225] [cursor=pointer]:
            - /url: https://instagram.com/irctc.official?igshid=yyg5byow704l
            - generic [ref=e226]: 
          - link "I.R.C.T.C. Official linkedin page. opens a new windows" [ref=e227] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/irctcofficial
            - generic [ref=e228]: 
          - link "I.R.C.T.C. Official telegram page. opens a new windows" [ref=e229] [cursor=pointer]:
            - /url: https://t.me/IRCTC_Official
            - generic [ref=e230]: 
          - link "I.R.C.T.C. Official pinterest page. opens a new windows" [ref=e231] [cursor=pointer]:
            - /url: https://in.pinterest.com/irctcofficial/
            - generic [ref=e232]: 
          - link "I.R.C.T.C. Official tumblr page. opens a new windows" [ref=e233] [cursor=pointer]:
            - /url: https://irctcofficial.tumblr.com/
            - generic [ref=e234]: 
          - link "I.R.C.T.C. Official Koo page. opens a new windows" [ref=e235] [cursor=pointer]:
            - /url: https://www.kooapp.com/profile/irctcofficial
            - img [ref=e237]
          - link "I.R.C.T.C. Official twitter page. opens a new windows" [ref=e238] [cursor=pointer]:
            - /url: https://twitter.com/IRCTCofficial
            - generic [ref=e239]: 
      - generic [ref=e243]:
        - generic [ref=e245]:
          - button "IRCTC Trains " [ref=e246] [cursor=pointer]:
            - generic [ref=e247]:
              - text: IRCTC Trains
              - generic [ref=e248]: 
          - button "General Information " [ref=e249] [cursor=pointer]:
            - generic [ref=e250]:
              - text: General Information
              - generic [ref=e251]: 
          - button "Important Information " [ref=e252] [cursor=pointer]:
            - generic [ref=e253]:
              - text: Important Information
              - generic [ref=e254]: 
          - button "Agents " [ref=e255] [cursor=pointer]:
            - generic [ref=e256]:
              - text: Agents
              - generic [ref=e257]: 
          - button "Enquiries " [ref=e258] [cursor=pointer]:
            - generic [ref=e259]:
              - text: Enquiries
              - generic [ref=e260]: 
        - generic [ref=e262]:
          - button "How To " [ref=e263] [cursor=pointer]:
            - generic [ref=e264]:
              - text: How To
              - generic [ref=e265]: 
          - button "IRCTC Official App " [ref=e266] [cursor=pointer]:
            - generic [ref=e267]:
              - text: IRCTC Official App
              - generic [ref=e268]: 
          - button "Advertise with us " [ref=e269] [cursor=pointer]:
            - generic [ref=e270]:
              - text: Advertise with us
              - generic [ref=e271]: 
          - button "Refund Rules " [ref=e272] [cursor=pointer]:
            - generic [ref=e273]:
              - text: Refund Rules
              - generic [ref=e274]: 
          - button "Person With Disability Facilities " [ref=e275] [cursor=pointer]:
            - generic [ref=e276]:
              - text: Person With Disability Facilities
              - generic [ref=e277]: 
        - generic [ref=e279]:
          - button "E-Wallet " [ref=e280] [cursor=pointer]:
            - generic [ref=e281]:
              - text: E-Wallet
              - generic [ref=e282]: 
          - button "IRCTC Co-branded Card Benefits " [ref=e283] [cursor=pointer]:
            - generic [ref=e284]:
              - text: IRCTC Co-branded Card Benefits
              - generic [ref=e285]: 
          - button "IRCTC-iPAY Payment Gateway " [ref=e286] [cursor=pointer]:
            - generic [ref=e287]:
              - text: IRCTC-iPAY Payment Gateway
              - generic [ref=e288]: 
          - button "IRCTC Zone " [ref=e289] [cursor=pointer]:
            - generic [ref=e290]:
              - text: IRCTC Zone
              - generic [ref=e291]: 
          - button "DMRC Ticket Booking at IRCTC " [ref=e292] [cursor=pointer]:
            - generic [ref=e293]:
              - text: DMRC Ticket Booking at IRCTC
              - generic [ref=e294]: 
        - generic [ref=e296]:
          - button "For Newly Migrated Agents " [ref=e298] [cursor=pointer]:
            - generic [ref=e299]:
              - text: For Newly Migrated Agents
              - generic [ref=e300]: 
          - button "Mobile Zone " [ref=e301] [cursor=pointer]:
            - generic [ref=e302]:
              - text: Mobile Zone
              - generic [ref=e303]: 
          - button "Policies " [ref=e304] [cursor=pointer]:
            - generic [ref=e305]:
              - text: Policies
              - generic [ref=e306]: 
          - button "Ask Disha ChatBot " [ref=e307] [cursor=pointer]:
            - generic [ref=e308]:
              - text: Ask Disha ChatBot
              - generic [ref=e309]: 
          - button "About us " [ref=e310] [cursor=pointer]:
            - generic [ref=e311]:
              - text: About us
              - generic [ref=e312]: 
        - generic [ref=e315]:
          - button "Help & Support" [ref=e316] [cursor=pointer]
          - button "E-Pantry " [ref=e317] [cursor=pointer]:
            - generic [ref=e318]:
              - text: E-Pantry
              - generic [ref=e319]: 
      - generic [ref=e322]:
        - img "Secured Payment Partner" [ref=e325]
        - generic [ref=e327]:
          - paragraph [ref=e328]: Copyright Â© 2026 - www.irctc.co.in. All Rights Reserved
          - paragraph [ref=e329]:
            - text: Designed and Hosted by
            - strong [ref=e330]:
              - link "CRIS" [ref=e331] [cursor=pointer]:
                - /url: http://cris.org.in
          - paragraph [ref=e332]:
            - strong [ref=e333]:
              - link "Compatible Browsers link opens a new windows" [ref=e334] [cursor=pointer]:
                - /url: http://contents.irctc.co.in/en/BetaSiteCompatibleBrowser.html
                - text: Compatible Browsers
          - paragraph [ref=e335]: DM3MS1
  - generic [ref=e339] [cursor=pointer]: Easy Booking on AskDisha
  - complementary "AskDisha Chat Assistant" [ref=e340]:
    - generic [ref=e341] [cursor=pointer]:
      - img "Open Disha chat" [ref=e342]
      - img "Minimize chat" [ref=e343]
```

# Test source

```ts
  71  |         console.log(await page3.locator("//span[@class='priceDetail-base-redesignRupeeTotalIcon']/..").textContent())
  72  | 
  73  | 
  74  | })
  75  | 
  76  | test("irctc",async({page})=>{
  77  |     await page.goto("https://www.irctc.co.in/nget/train-search")
  78  |     await page.locator("//input[@role='searchbox']").first().fill("Bengaluru")
  79  |     await page.waitForTimeout(3000)
  80  |     await page.keyboard.press('ArrowDown')
  81  |     await page.keyboard.press('Enter')
  82  | 
  83  |     await page.locator("//input[@role='searchbox']").last().fill("Mumbai")
  84  |     await page.keyboard.press('ArrowDown')
  85  |     await page.keyboard.press('Enter')
  86  | 
  87  |     await page.click("//span[@class='ng-tns-c69-9 ui-calendar']/input")
  88  |     if(await page.locator("//div/span[.='July']").isVisible())
  89  |     {
  90  | 
  91  |     }
  92  |     else
  93  |     {
  94  |         await page.click("//span[@class='ui-datepicker-next-icon pi pi-chevron-right ng-tns-c69-9']")
  95  |     }
  96  | 
  97  |     await page.click("//a[.='20']")
  98  |     await page.locator("//div[@class='ui-dropdown-label-container ng-tns-c76-10']/span").click()
  99  |     await page.locator("//span[.='AC 2 Tier (2A)']").click()
  100 |    
  101 |     await page.getByRole('button',{name:" Search Trains "}).click()
  102 |     await page.waitForSelector("//div[@class='col-sm-5 col-xs-11 train-heading']/strong")
  103 | 
  104 |     let tname=await page.locator("//div[@class='col-sm-5 col-xs-11 train-heading']/strong").allTextContents()
  105 |     let ttime=await page.locator("//span[@class='time']/strong").allTextContents()
  106 | 
  107 |    for(let t of tname)
  108 |    {
  109 |     await page.click(`//div[@class='col-sm-5 col-xs-11 train-heading' and contains(.,'${t}')]/../../../..//strong[.='AC 2 Tier (2A)']/../..`)
  110 |     await page.waitForSelector(`//div[@class='col-sm-5 col-xs-11 train-heading' and contains(.,'${t}')]/../../../..//strong[contains(.,'₹')]`)
  111 |    }
  112 |     
  113 |     let tprice=await page.locator("//span[@class='ng-star-inserted']/strong").allTextContents()
  114 | 
  115 |     for(let i=0;i<tname.length;i++)
  116 |     {
  117 |         console.log(await tname[i])
  118 |         console.log(await ttime[i])
  119 |         console.log(await tprice[i])
  120 |     }
  121 | })
  122 | 
  123 | test.only("irctc-1",async({page})=>{
  124 |     await page.goto("https://www.irctc.co.in/nget/train-search")
  125 |     
  126 |     await page.fill("//span[@class='ng-tns-c68-7 ui-autocomplete ui-widget']/input",'Bengaluru')
  127 |     
  128 |     // await page.getByPlaceholder("User Name").fill("Ravichandiran16")
  129 |     // await page.getByPlaceholder("Password").fill("Ravi161021#")
  130 |     // await page.getByRole('button',{name:'SIGN IN'}).click()
  131 | 
  132 |     await page.fill("//span[@class='ng-tns-c68-7 ui-autocomplete ui-widget']/input",'Bengaluru')
  133 |    
  134 | 
  135 |    // await page.fill("//span[@class='ng-tns-c68-7 ui-autocomplete ui-widget']/input",'Bengaluru')
  136 |     await page.waitForSelector("//li/span[@class='ng-star-inserted' and contains(.,'KSR')]")
  137 |     await page.keyboard.press('ArrowDown')
  138 |     await page.keyboard.press('Enter')
  139 |     
  140 |     await page.fill("//span[@class='ng-tns-c68-8 ui-autocomplete ui-widget']/input",'Mumbai')
  141 |     
  142 |     //await page.click("//a[contains(@class,'fa fa-window-close pull-right loginCloseBtn')]")
  143 |     
  144 | 
  145 |     //await page.fill("//span[@class='ng-tns-c68-8 ui-autocomplete ui-widget']/input",'Mumbai')
  146 |     await page.waitForSelector("//ul[@role='listbox']")
  147 |     await page.keyboard.press('ArrowDown')
  148 |     await page.keyboard.press('Enter')
  149 | 
  150 | 
  151 |     
  152 |     await page.click("//span[@class='ng-tns-c69-9 ui-calendar']/input")
  153 | 
  154 | // await page.click("//a[contains(@class,'fa fa-window-close pull-right loginCloseBtn')]") 
  155 |     
  156 | 
  157 |     if(await page.locator("//div/span[.='July']").isVisible())
  158 |     {
  159 | 
  160 |     }
  161 |     else
  162 |     {
  163 |         await page.click("//span[@class='ui-datepicker-next-icon pi pi-chevron-right ng-tns-c69-9']")
  164 |     }
  165 | 
  166 |     await page.click("//a[.='20']")
  167 |     await page.locator("//div[@class='ui-dropdown-label-container ng-tns-c76-10']/span").click()
  168 |     await page.locator("//span[.='AC 2 Tier (2A)']").click()
  169 | 
  170 |     await page.getByRole('button',{name:' Search Trains '}).click()
> 171 |     await page.waitForTimeout(5000)
      |                ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  172 | 
  173 |     let ti=await page.locator("//span[@class='time']/strong").allTextContents()
  174 |    
  175 |     let times=[]
  176 |     for(let t of ti)
  177 |     {
  178 |         let temp=t.replace('|','')
  179 |         times.push(temp.replace(':','.'))
  180 |     }
  181 | 
  182 |     let time=times.map(Number)
  183 |     
  184 |     console.log(times)
  185 |     console.log(time)
  186 | 
  187 | })
  188 | 
```