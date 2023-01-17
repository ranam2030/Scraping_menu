const puppeteer = require('puppeteer')
const fs = require('fs/promises')
async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("http://gautreausrestaurant.com/pages/menu.php")

    const element = await page.waitForSelector(".jspPane")
    const text = await page.evaluate(element => element.innerText, element)
    fs.writeFile('menu.txt',text, (err) => {
        if (err) throw err;
    })
    await browser.close()
}

start()