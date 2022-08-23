// @ts-nocheck

const { text, default: test } = require('@playwright/test')

test('Handle alerts', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');

    /* code to handle alerts */
    /* Before we click we have to create a listner and we have to create it by using page.on() method --> This is a type of event in playwright and this one dispatches object dialogs */

    page.once('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.accept();
    })
    await page.click('#confirmButton');

    page.once('dialog', async dialog => {
        console.log(dialog.message())
        await dialog.accept('my text is this')
    })
    await page.click('#promtButton');
})