// @ts-nocheck

const {test} = require('@playwright/test')

test('Hamdle mouse events', async({page}) => {

    /* navigating to site */
    await page.goto('https://applitools.com/')

    // take screenshots 

    await page.screenshot({path : 'screenshot.png'})

    /* Screenshot of an element */
    const logo = await page.$('.logo')
    await logo?.screenshot({path : 'logo.png'})

    /* Screenshot of a whole page */
    await page.screenshot({path : Date.now() + 'fullpage.png', fullPage : true})

})