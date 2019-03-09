"use strict";
const MockDate = require("mockdate");
const moment = require("moment");
const logger_1 = require("./logger");
const logger = logger_1.default(__filename);
const randomDate = (start, end) => {
    const startDate = new Date(start);
    startDate.setTime(startDate.getTime());
    const endDate = new Date(end);
    endDate.setTime(endDate.getTime());
    const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return moment(date.toISOString());
};
class TimeContext {
    constructor(from, to) {
        this.from = "";
        this.to = "";
        this.time = moment();
        this.isFirst = true;
        this.from = from;
        this.to = to;
        this.time = randomDate(from, to);
    }
    setIncrementTime() {
        const nextTime = moment(this.time).add(1, "minutes").format();
        if (moment(this.time).isBetween(this.from, nextTime)) {
            this.time = moment(nextTime);
        }
    }
    getTime() {
        return this.time;
    }
    async change(callback) {
        if (this.isFirst) {
            this.isFirst = false;
        }
        else {
            this.setIncrementTime();
        }
        MockDate.set(this.time);
        logger.info(`時刻を${this.time}に設定しました。`);
        const result = await callback();
        MockDate.reset();
        logger.info("時刻をクリアしました。");
        return result;
    }
}
module.exports = TimeContext;
//# sourceMappingURL=index.js.map