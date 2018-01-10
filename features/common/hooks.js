const {defineSupportCode} = require('cucumber')

const guid = require("../common/guid")
const driver = require("../common/driver")


defineSupportCode(function ({After, Before}) {
  Before(function () {
    //this.attach("some text");
  });

  After(async function () {
    //await takeScreen(this)
  });
});

async function takeScreen(step) {
  var png = await driver.getScreenshot("reports/screenshots/" + guid() + '.png');
  step.attach(png, 'image/png');
}

