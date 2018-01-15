class BasePage {
    constructor(browser) {
        this._browser = browser;
    }

    async click(selector) {
        await this.browser.sleep(300).wait(selector, 30000)
            .sleep(300).click(0);
    }

    get browser() {
        return this._browser;
    }

    isPageError(code) {
        return code == '' || / jscontent="errorCode" jstcache="\d+"|diagnoseConnectionAndRefresh|dnserror_unavailable_header|id="reportCertificateErrorRetry"|400 Bad Request|403 Forbidden|404 Not Found|500 Internal Server Error|502 Bad Gateway|503 Service Temporarily Unavailable|504 Gateway Time-out/i.test(code);
    }
}

module.exports = BasePage;
