import * as moment from 'moment';
export default class TimeContext {
    protected from: string;
    protected to: string;
    protected time: moment.Moment;
    protected isFirst: boolean;
    constructor(from: string, to: string);
    setIncrementTime(): void;
    context(callback?: () => void): Promise<any>;
}
