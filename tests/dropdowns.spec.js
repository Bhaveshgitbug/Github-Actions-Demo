// @ts-nocheck

// const { test, expect } = require('@playwright/test')

// test.describe('Learn to select dropdown', () => {
//     test('Select a dropdown based on value', async ({ page }) => {
//         await page.goto('https://letcode.in/dropdowns');
//         const fruits = await page.$('#fruits')
//         await fruits?.selectOption('1');
//         const msg = await page.$('div.is-success');
//         if (msg) {
//             expect(await msg.textContent()).toContain("Mango")
//         }
//     })
//     test('Select multiple', async ({ page }) => {
//         const heros = await page.$('#superheros')
//         heros?.selectOption([
//             { label: "Aquaman" }, { value: 'bt' }, { index: 8 }
//         ])
//     })
//     test('Count of the select', async ({ page }) => {
//         const lang = await page.$$("#lang option")
//         console.log(lang.length);
//     })
//     test('Get select text', async({page}) => {
//         await page.selectOption('#country',"India")
//         const text = await page.$eval<String>('#country', ele => ele.value)
//         console.log(text);
//         expect(text).toBe("India")
//     })
// })


const { test, chromium } = require('@playwright/test')
test('To select dropdown', async ({page}) => {
    // const browser = await chromium.launch({headless : false,slowMo : 300});
    // const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown')
    const dropdown = await page.$('#dropdown');
    // value
    await dropdown.selectOption({value : '1'})
    // label
    await dropdown.selectOption({label : 'Option 2'})
    // index
    await dropdown.selectOption({index : 1});

    // values inside text
    const availableOptions = await dropdown.$$('option');
    console.log(availableOptions.length)
    for(let i = 0; i < availableOptions.length; i++){
        console.log(await availableOptions[i].innerText())
    }
    // await browser.close();
});