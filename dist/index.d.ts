import * as moment from "moment";
declare class TimeContext {
    protected from: string;
    protected to: string;
    protected time: moment.Moment;
    protected isFirst: boolean;
    constructor(from: string, to: string);
    setIncrementTime(): void;
    getTime(): moment.Moment;
    change(callback: () => void): Promise<any>;
}
export = TimeContext;
