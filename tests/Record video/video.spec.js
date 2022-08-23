// @ts-nocheck

const { test, chromium } = require('@playwright/test')

test('record videos', async () => {
    const browser = await chromium.launch({headless : true, slowMo : 100})
    const context = await browser.newContext({
        recordVideo : {
            dir : "./recordings"
        }
    })
    const page = await context.newPage()

    /* navigating to site */
    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1')

    await page.click('button')
    await page.waitForSelector('#loading')
    await page.waitForSelector('#loading', {state : 'hidden'})
    await page.waitForTimeout(100)
})