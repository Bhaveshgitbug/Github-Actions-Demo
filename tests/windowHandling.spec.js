// @ts-nocheck

const { test, expect } = require('@playwright/test')

test.describe('Handle Windows', () => {
    test('Single page handling', async({page}) => {
        const[newwindow] = await Promise.all([
            context.waitForEvent('page'),
            await page.click("#home")
        ])
        expect(newwindow.url()).toContain("test");
        await newwindow.click('"Log in"')
        expect(newwindow.url()).toContain("signin")
    })
})