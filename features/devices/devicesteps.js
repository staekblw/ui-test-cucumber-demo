const {Given, When, Then} = require('cucumber')

Given('打开设备页面', async function () {
    await this.attach(this.indexPage.open.toString())
    await this.indexPage.open()
    await this.takeScreen();
})

When('创建设备', async function () {
    await this.attach(this.indexPage.open.toString())
    await this.indexPage.open()
    await this.takeScreen();
})

Then('看见文字 {string},{string}', async function (s1, s2) {
    console.log(s1);
    console.log(s2);
    await this.attach(this.indexPage.open.toString())
    await this.indexPage.open()
    await this.takeScreen();
})



