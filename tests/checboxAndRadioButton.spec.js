// @ts-nocheck

const { test } = require('@playwright/test')

test.describe('To handle checkboxes and radio button', async () => {
    test('Handle chekboxes and radio', async ({ page }) => {
        await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
        // check the second checkbox
        const checks = await page.$$('#main div:nth-child(1) input[type="checkbox"]');
        await checks[0].uncheck();
        await checks[1].check();

        // select the second radio button
        const radios = await page.$$('#main div:nth-child(1) input[type="radio"]');
        // await radios[0].uncheck();
        await radios[1].check();
    })
})