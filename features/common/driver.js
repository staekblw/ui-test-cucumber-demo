const fs = require('fs');
const path = require('path');
const chai = require("chai");
const should = chai.should();
const JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);

let sessionConfig = Object.assign({}, {
        "webdriver": {
            "host": "localhost",
            "port": "4444",
        },
    },
    {
        'ie.ensureCleanSession': true,
        'chromeOptions': {
            'args': ['--enable-automation']
        }
    });


let timeOutOptions = {
    pageloadTimeout: 30000, // page onload timeout
    scriptTimeout: 5000, // sync script timeout
    asyncScriptTimeout: 10000 // async script timeout
};

const driver = {
    browser: function () {
        return new JWebDriver()
            .session(sessionConfig)
            .maximize()
            .config(timeOutOptions);
    }
}

module.exports = driver;
