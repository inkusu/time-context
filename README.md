# time-context

<p align="center">
  <a href="https://travis-ci.org/inkusu/time-context"><img src="https://travis-ci.org/inkusu/time-context.svg?branch=master" alt="travis"></a>
  <a href="https://codecov.io/gh/inkusu/time-context"><img src="https://codecov.io/gh/inkusu/time-context/branch/master/graph/badge.svg" /></a>
  <a href="https://www.npmjs.com/package/time-context"><img src="https://badgen.net/npm/dm/time-context" alt="download"></a>
  <a href="https://www.npmjs.com/package/time-context"><img src="https://badgen.net/npm/v/time-context" alt="version"></a>
  <a href="https://www.npmjs.com/package/time-context"><img src="https://badgen.net/npm/license/time-context" alt="License"></a>
 </p>
 
### 使い方

```javascript
const TimeContext = require('time-context');

const timeContext = new TimeContext('2019-01-01 00:00:00', '2019-01-31 23:59:59');
timeContext.change(() => {
  console.log(new Date());
  // 2019-01-01 00:00:00 ~ 2019-01-31 23:59:59 の間で決定されたランダムな時間がnew Dateで出力されます。
});


console.log(new Date());
// changeメソッド以外の範囲では現在時刻が表示されます。

```
