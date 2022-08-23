// @ts-nocheck

const { test, expect } = require('@playwright/test')

test('Open letcode and verify title', async ({ page }) => {
    await page.goto('https://www.letcode.in')
    const title = await page.title();
    expect(title).toBe('LetCode with Koushik')
});

test.only('Open letcode and login', async({page}) => {
    await page.goto('https://www.letcode.in')
    const title = await page.title();
    expect(title).toBe('LetCode with Koushik')
    // await Promise.all([])

    await page.click('text = Log in')
    await page.fill('input[name="email"]', 'raycathode54@gmail.com');
    await page.fill('input[name="password"]', 'Raycathode@54')
    await page.click("p>button.button");
    expect(page.url()).toBe('https://letcode.in/signin')
})