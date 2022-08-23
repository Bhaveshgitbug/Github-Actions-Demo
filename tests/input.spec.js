// @ts-nocheck

const { test } = require('@playwright/test')

test.describe('Learn to handle input fields', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://letcode.in/edit')
    })
    test('Enter your full name', async({page}) => {
        // await page.locator('#fullName').type('Ray Cathode');
        await page.type('#fullName', 'Ray Cathode', {delay : 50})
    })
    test('Append a text and press keyboard tab', async({page}) => {
        // await page.fill('#join', ' human')
        // await page.type('#join', ' human')

        await page.locator('#join').focus();
        await page.keyboard.press('End');
        await page.type('#join',' human')
    });
    test('What is inside the text box', async({page}) => {
        const text = await page.getAttribute('#getMe', 'value')
        console.log(text)
    })
    test('Clear the text', async({page}) => {
        await page.fill('#clearMe', '')
    })
})