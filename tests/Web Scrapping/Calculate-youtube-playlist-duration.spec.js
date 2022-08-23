// @ts-nocheck

const { test } = require('@playwright/test')

test('Calculate youtube playlist duration', async ({ page }) => {
    const url = "https://www.youtube.com/playlist?list=PL699Xf-_ilW7EyC6lMuU4jelKemmS6KgD"
    await page.goto(url)
    const videos = await page.$$("ytd-thumbnail-overlay-time-status-renderer span")
    console.log(videos.length)
    let totalMin = 0;
    await Promise.all(
        videos.map(async ele => {
            const duration = await ele.innerText();
            const timeSlices = duration.trim().split(":");
            let min = 0;
            let sec = 0;
            if(timeSlices.length == 2){
                min = Number(timeSlices[0])
                sec = Number(timeSlices[1])
                min += sec /60;
            }else if(duration.length == 3){
                let hrs = Number(timeSlices[0])
                min = Number(timeSlices[1])
                sec = Number(timeSlices[2])
                min += ((hrs * 60) + (sec / 60))
            }
            totalMin += min;
        })
    )
    console.log(totalMin)
    const hours = Math.floor(totalMin/60)
    const minutes = Math.trunc(totalMin % 60)
    const seconds = Math.trunc((totalMin - Math.trunc(totalMin)) * 60)
    const title = await page.title()
    console.log(`${title} --> ${hours}h ${minutes}m ${seconds}s`)
})