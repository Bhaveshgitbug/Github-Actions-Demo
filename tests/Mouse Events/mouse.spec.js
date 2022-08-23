// @ts-nocheck

const {test} = require('@playwright/test')

test('Hamdle mouse events', async({page}) => {

    /* navigating to site */
    await page.goto('https://paint.js.org/')

    await page.mouse.move(200,200)
    await page.mouse.down()
    await page.mouse.move(200,200)
    await page.mouse.move(200,200)
    await page.mouse.move(200,200)
    await page.mouse.move(200,200)
    await page.mouse.up()
})