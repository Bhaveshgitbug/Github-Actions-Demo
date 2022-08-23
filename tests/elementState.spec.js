// @ts-nocheck

const { test, firefox } = require('@playwright/test')

test('Verify element state', async({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form')

    /* Print the element state */

    const fName = await page.$('#firstName')
    const soprtsCheck = await page.$('#hobbies-checkbox-1')
    const submitButton = await page.$('#submit')

    console.log(await fName.isDisabled())
    console.log(await fName.isEnabled())
    console.log(await fName.isEditable())
    console.log(await soprtsCheck.isChecked())
    console.log(await soprtsCheck.isVisible())
    console.log(await submitButton.isHidden())
    console.log(await submitButton.isVisible())

});