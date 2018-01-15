const {Given, When, Then} = require('cucumber')

Given('输入{string},{string}', async function (user, pwd) {
    console.log(user + pwd)
    console.log(this.browser.toString())
})

When('登录', async function () {
})

Then('看见文字 {string}', async function (text) {
    console.log(text);
})



