const fs = require('fs');
const path = require('path');
const chai = require("chai");
const should = chai.should();
const JWebDriver = require('jwebdriver');

let config = {
    "host": "10.45.53.21",
    "port": "4444"
};

chai.use(JWebDriver.chaiSupportChainPromise);


let sessionConfig = Object.assign({},
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
        return new JWebDriver(
            config
        )
            .session(sessionConfig)
            .maximize()
            .config(timeOutOptions);
    }
}

module.exports = driver;
