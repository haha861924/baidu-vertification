import puppeteer from 'puppeteer';

const crawler_path = 'https://tieba.baidu.com/f?kw=nba'


export async function start() {
  console.log('Starting Puppeteer');

  const browser = await puppeteer.launch({
    headless: false,
    devtools: true
  });

  const page = await browser.newPage();
  await page.goto(crawler_path, {
    // timeout: 60000,
    waitUntil: 'networkidle2'
  });

  // do something with the page
  // e.g. get the title of the page
  const title = await page.title();
  console.log('Title:', title);

  // close the browser
  await browser.close();
}