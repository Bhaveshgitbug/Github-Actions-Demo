// @ts-nocheck

const { text, default: test, expect } = require('@playwright/test')

// test('Handle iframes', async({page}) => {
//     await page.goto('https://demoqa.com/frames');

//     // logic to handle iframes

//     const frame1 = await page.frame({url : /\/sample/})
//     const heading = await frame1.$('h1')
//     console.log(await heading.innerText());
// })

test('Interact with frames', async ({ page }) => {
    await page.goto('https://letcode.in/frame')
    const frame = page.frame({ name: "firstFr" })
    if (frame != null) {
        await frame.fill('input[name="fname"]', "Bhavesh");
        await frame.fill('input[name="lname"]', "Kathuria");
        // await expect(page.locator('div p[class = "title has-text-info"]')).toHaveText("You have entered Bhavesh Kathuria")

        // go into child frame from parent frame
        const frames = frame.childFrames();
        console.log(frames.length);
        // console.log(frames[0]);
        if (frames != null) {
            await frames[0].fill('input[name="email"]', "sbwc.gmail.com")
        } else {
            console.log("Wrong frame")
        }

        // now again interact with the parent frame
        // directly from the child frame
        
        // await frame.fill('input[name="lname"]', "K");

        /* another way */

        const parent = frames[0].parentFrame();
        await parent?.fill('input[name="lname"]', "K");
    } else throw new Error("No such frame")


})