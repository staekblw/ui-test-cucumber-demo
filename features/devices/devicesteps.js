const {Given, When, Then, defineSupportCode} = require('cucumber')

const guid = require("../common/guid")
const driver = require("../common/driver")
const IndexPage = require("./pages/indexpage")

const indexPage = new IndexPage(driver)

Given('打开设备页面', async function () {
  await this.attach(indexPage.open.toString())
  await indexPage.open()
  await takeScreen(this);
})

When('创建设备', async function () {
  await this.attach(indexPage.open.toString())
  await indexPage.open()
  await takeScreen(this);
})

Then('看见设备创建成功', async function () {
  await this.attach(indexPage.open.toString())
  await indexPage.open()
  await takeScreen(this);
})


async function takeScreen(step) {
  let screenFile = "reports/screenshots/" + guid() + '.png';
  var png = await driver.getScreenshot(screenFile);
  await step.attach(png, 'image/png');
}