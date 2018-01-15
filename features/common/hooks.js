const {defineSupportCode} = require('cucumber')

defineSupportCode(function ({After, Before}) {
    Before(function () {
    });

    After(async function (senario) {
        // console.log(senario)
        if (senario.result.status === "failed") {
            await this.takeScreen();
        }
        await this.dispose()
    });
});

