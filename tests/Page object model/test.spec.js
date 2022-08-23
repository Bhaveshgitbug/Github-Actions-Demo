// @ts-nocheck

const { test, expect } = require('@playwright/test')
const { CommonFunctions } = require('./commonFunc.spec')
const { Header } = require('./Header.spec')
const { loginPage } = require('./loginPage.spec')

// var header = Header
// var login = loginPage
// var common = CommonFunctions

test.describe('TC001', () => {
    test('Login Positive _ JIRA101', async ({ page }) => {
        await page.goto('https://www.letcode.in')
        // expect(page.url()).toBe('https://www.letcode.in/')
        let header = new Header(page);
        let login = new loginPage(page)
        let common = new CommonFunctions(page)

        await header.clickLogin();
        await login.enteruserName('raycathode54@gmail.com')
        await login.enteruserPass('Raycathode@54')
        await login.clickLoginBtn();
        const toaster = await common.toaster;
        // expect(await toaster?.textcontent()).toContain("Welcome");
        await header.clickSignOut();

    })
})