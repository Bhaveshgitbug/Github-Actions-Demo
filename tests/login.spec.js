// @ts-nocheck
const { test, expect, chromium } = require('@playwright/test')

// test.beforeEach(async({page}) => {
//     await page.goto("https://leetcode.in/");
// })

test('Open LeetCode', async ({}) => {
  const browser = await chromium.launch();
  // const context = await browser.newContext();
  const page = await browser.newPage();
  await page.goto("https://www.saucedemo.com/");
 
  await page.locator('#user-name').fill( 'standard_user')
  await page.locator('#password').fill('secret_sauce');
  await page.click('#login-button');
  await browser.close();
  // await page.locator('span:text("Sign In")').click()

  // await page.goto('https://leetcode.com/');
  // // Click span:has-text("Sign in")
  // await page.locator('span:has-text("Sign in")').click();
  // await expect(page).toHaveURL('https://leetcode.com/accounts/login/');
  // // Click [placeholder="Username or E-mail"]
  // await page.locator('[placeholder="Username or E-mail"]').click();
  // // Fill [placeholder="Username or E-mail"]
  // await page.locator('[placeholder="Username or E-mail"]').fill('raycathode54@gmail.com');
  // // Press Tab
  // await page.locator('[placeholder="Username or E-mail"]').press('Tab');
  // // Fill [placeholder="Password"]
  // await page.locator('[placeholder="Password"]').fill('Bhavesh@2000');
  // // Press Enter
  // await page.locator('[placeholder="Password"]').press('Enter');
  // await expect(page).toHaveURL('https://leetcode.com/');
  // // Click a:has-text("Problems")
  // await page.locator('a:has-text("Problems")').click();
  // await expect(page).toHaveURL('https://leetcode.com/problemset/all/');
  // // Click text=2. Add Two Numbers
  // await page.locator('text=2. Add Two Numbers').click();
  // await expect(page).toHaveURL('https://leetcode.com/problems/add-two-numbers/');
  // // Click text=🔈 LeetCode is hiring! Apply NOW.🔈 icon/close Premium00 >> svg >> nth=4
  // await page.locator('text=🔈 LeetCode is hiring! Apply NOW.🔈 icon/close Premium00 >> svg').nth(4).click();
  // // Click text=Sign out
  // await page.locator('text=Sign out').click();
  // await expect(page).toHaveURL('https://leetcode.com/');
  // browser.close();

});