const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--start-maximized"]
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto("https://www.google.com/"); // Adjust the URL as needed
  await page.waitForSelector("textarea"); // Wait for the page to load
    await page.type("textarea", "Hello, world!"); // Type into the textarea
    await page.keyboard.press("Enter"); // Press Enter to submit
  // await browser.close();
})();
