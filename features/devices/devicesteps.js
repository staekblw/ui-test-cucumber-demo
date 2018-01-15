const {Given, When, Then, And} = require('cucumber')

Given(/^打开设备页面$/, async function () {
    await this.indexPage.open("this is url")
    // throw "erorr"
})

When('创建设备', async function () {
    await this.indexPage.open();
})

Then('看见文字 {string},{string}', async function (text1, text2) {
    console.log(text1);
    console.log(text2);
    await this.indexPage.open();
})



