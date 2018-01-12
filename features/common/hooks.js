const {defineSupportCode} = require('cucumber')

const guid = require("../common/guid")
const driver = require("../common/driver")


defineSupportCode(function ({After, Before}) {
    Before(function () {
        // console.log("start..........." + this._linbo)
    });

    After(async function () {
        // console.log("end...........")
        await this.dispose()
    });
});

