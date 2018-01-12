const BasePage = require("../../common/basepage")

class IndexPage extends BasePage {
    constructor(browser) {
        super(browser)
    }

    async open() {
        let url = `http://baidu.com`;
        await this.browser.url(url);
        await this.browser.sleep(500).wait('body', 30000).html().then((code) => {
            this.isPageError(code).should.be.false;
        });
    };

    async goGIS() {
        await this.browser.sleep(300).wait('//a[text()="地理信息中心"]', 30000)
            .sleep(300).click(0);
        await this.browser.sleep(500).wait('body', 30000).html().then((code) => {
            this.isPageError(code).should.be.false;
        });
    };

    async goFailureProjects() {
        await this.browser.sleep(300).wait('//a[text()="失败项目"]', 30000)
            .sleep(300).click(0);
        await this.browser.sleep(500).wait('body', 30000).html().then((code) => {
            this.isPageError(code).should.be.false;
        });
    };
}

module.exports = IndexPage;
