// @ts-nocheck

const { test } = require('@playwright/test')

test.describe('Learn to handle alerts', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/alert')
    })
    test('Handle dialogues', async ({ page }) => {
        // await page.locator('#prompt').click();
        const ele = await page.$('#prompt');
        page.on("dialog", (dialog) => {
            console.log("Message :- " + dialog.message());
            console.log("Default value :- " + dialog.defaultValue());
            console.log("Type :- " + dialog.type())
            dialog.accept("Welcome my friends welcome")
        })
        // page.click()
        await ele?.click()

    })
})
