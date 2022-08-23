// @ts-nocheck

const {test, expect} = require('@playwright/test')

test.describe('Upload file', () => {
    // const filePath = 'C:\Users\Bug_01\Desktop\GIT\PlayWright\Files'
    test('Upload files using set input files', async({page}) => {
        await page.goto('https://www.sendgb.com/');
        await page.locator('input[name="qqfile"]').setInputFiles('git notes.txt');
    })
})
    