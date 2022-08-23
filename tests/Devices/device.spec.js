// @ts-nocheck

const { test, devices, chromium } = require('@playwright/test')
const iphone = devices['iPhone 11'];
/* Devices return the dictionary of devices available*/

test('test devices', async() => {
    const browser = await chromium.launch({headless : false, slowMo : 300})
    const context =  browser.newContext({
       ...iphone,
       permissions : ['geoloaction'],
       geolocation :  {latitude : 28.458791529463006, longitude : 77.30577858465894},
       locale : 'hi-IN'
    })
    const page = await context.newPage()
    await page.goto('https://www.google.com/maps')
    await page.waitForTimeout(5000)
    await browser.close()
})