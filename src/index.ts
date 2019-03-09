import * as MockDate from "mockdate";
import * as moment from "moment";

import loggerFactory from "./logger";
const logger = loggerFactory(__filename);

/**
 * start end間でランダム時間を一つ生成する
 * @param start
 * @param end
 */
const randomDate = (start: string, end: string): moment.Moment => {
  const startDate = new Date(start);
  startDate.setTime(startDate.getTime());

  const endDate = new Date(end);
  endDate.setTime(endDate.getTime());

  const date = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  return moment(date.toISOString());
};

class TimeContext {

  protected from: string = "";
  protected to: string = "";
  protected time: moment.Moment = moment();
  protected isFirst: boolean = true;

  public constructor(from: string, to: string) {
      this.from = from;
      this.to = to;

      this.time = randomDate(from, to);
    }

  public setIncrementTime() {
      const nextTime =  moment(this.time).add(1, "minutes").format();
      if (moment(this.time).isBetween(this.from, nextTime)) {
          this.time = moment(nextTime);
        }
    }

  public getTime(): moment.Moment {
      return this.time;
    }

  public async change(callback: () => void): Promise<any> {

      if (this.isFirst) {
          this.isFirst = false;
      } else {
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

export = TimeContext;
