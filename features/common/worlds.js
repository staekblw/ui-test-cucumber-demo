const {setDefaultTimeout, setWorldConstructor} = require('cucumber');
const guid = require("../common/guid")
const driver = require("./driver");

const IndexPage = require("../devices/pages/indexpage")

const SECOND = 1000;
setDefaultTimeout(60 * SECOND);

class CustomWorld {
    constructor({attach, parameters}) {
        this._attach = attach;
        this._parameters = parameters;
        this._linbo = "linbo"
        this._browser = driver.browser();
        this._indexPage = new IndexPage(this._browser);
    }

    get attach() {
        return this._attach;
    }

    get browser() {
        return this._browser;
    }

    get indexPage() {
        return this._indexPage;
    }

    dispose() {
        this._browser.close();
    }

    async takeScreen() {
        let screenFile = "reports/screenshots/" + guid() + '.png';
        let png = await this._browser.getScreenshot(screenFile);
        return this.attach(png, 'image/png');
    }
}

setWorldConstructor(CustomWorld)
