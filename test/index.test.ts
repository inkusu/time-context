/* eslint-env jest */

import * as moment from 'moment';
import TimeContext = require('../src');

const from = '2019-01-01 00:00:00';
const to = '2019-01-31 23:59:59';

const timeContext = new TimeContext(from, to);

test('指定期間内の日付が生成されていることを確認', async done => {
    timeContext.change(() => {
        expect(moment(new Date()).isBetween(moment(from), moment(to))).toBe(true);
        done();
    });
});

test('コールバック以外の箇所では指定期間内の日付が生成されないことを確認する', async done => {
    await timeContext.change(() => {});
    expect(moment(new Date()).isBetween(moment(from), moment(to))).toBe(false);
    done();
});

test('仮想時間が進んでいることを確認する', async done => {
    const time1 = timeContext.getTime();

    await timeContext.change(() => {});

    const time2 = timeContext.getTime();

    expect(time2.unix() - time1.unix()).toBeTruthy();

    done();
});
