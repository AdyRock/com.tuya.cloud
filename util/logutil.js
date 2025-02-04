class LogUtil {
    constructor(logfunction, isDebug = false) {
        this.isDebug = isDebug;
        this.logfunction = logfunction;
    }

    debug(...args) {
        if (this.isDebug) {
            this.logfunction(...args);
        }
    }

    log(...args) {
        this.logfunction(...args);
    }
}

module.exports = LogUtil;
