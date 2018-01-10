class IndexPage {
    constructor(driver) {
        this.driver = driver;
    }
    async open() {
      let url = `http://baidu.com`;
      await this.driver.url(url);
        await this.driver.sleep(500).wait('body', 30000).html().then(function (code) {
            IndexPage.isPageError(code).should.be.false;
        });
    };

    async goGIS() {
        await this.driver.sleep(300).wait('//a[text()="地理信息中心"]', 30000)
            .sleep(300).click(0);
        await this.driver.sleep(500).wait('body', 30000).html().then(function (code) {
            IndexPage.isPageError(code).should.be.false;
        });
    };

    async goFailureProjects() {
        await this.driver.sleep(300).wait('//a[text()="失败项目"]', 30000)
            .sleep(300).click(0);
        await this.driver.sleep(500).wait('body', 30000).html().then(function (code) {
            IndexPage.isPageError(code).should.be.false;
        });
    };

    static isPageError(code) {
        return code == '' || / jscontent="errorCode" jstcache="\d+"|diagnoseConnectionAndRefresh|dnserror_unavailable_header|id="reportCertificateErrorRetry"|400 Bad Request|403 Forbidden|404 Not Found|500 Internal Server Error|502 Bad Gateway|503 Service Temporarily Unavailable|504 Gateway Time-out/i.test(code);
    };
}

module.exports = IndexPage;
