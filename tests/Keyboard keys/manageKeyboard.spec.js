// @ts-nocheck

const { test, firefox } = require('@playwright/test')

test('Verify element state', async ({ page }) => {
    // navgating to site
    await page.goto('https://the-internet.herokuapp.com/key_presses')
  
    // await page.click('#target')
    // await page.keyboard.type('One does not simply exit vim')
    // await page.keyboard.down('Shift')
    // for(let i = 0; i < ' exit vim'.length; i++){
    //     await page.keyboard.press('ArrowLeft')
    // }
    // await page.keyboard.up('Shift');
    // await page.keyboard.press('Backspace')
    // await page.keyboard.type('Welcome my friends welcome')

    await page.goto('https://the-internet.herokuapp.com/key_presses');
  // Click input[type="text"]
  await page.locator('input[type="text"]').click();
  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('One doest not simpyl exit vim');
  // Press ArrowLeft with modifiers
  await page.locator('input[type="text"]').press('Shift+ArrowLeft');
  // Press ArrowLeft with modifiers
  await page.locator('input[type="text"]').press('Shift+ArrowLeft');
  // Press ArrowLeft with modifiers
  await page.locator('input[type="text"]').press('Shift+ArrowLeft');
  // Press ArrowLeft with modifiers
  await page.locator('input[type="text"]').press('Shift+ArrowLeft');
  // Press ArrowLeft with modifiers
  await page.locator('input[type="text"]').press('Shift+ArrowLeft');
  // Press ArrowLeft with modifiers
  await page.locator('input[type="text"]').press('Shift+ArrowLeft');
  // Press ArrowLeft with modifiers
  await page.locator('input[type="text"]').press('Shift+ArrowLeft');
  // Press ArrowLeft with modifiers
  await page.locator('input[type="text"]').press('Shift+ArrowLeft');
  // Press ArrowLeft with modifiers
  await page.locator('input[type="text"]').press('Shift+ArrowLeft');
  // Fill input[type="text"]
  await page.locator('input[type="text"]').fill('One doest not simpyl welcoem my friend s');

})