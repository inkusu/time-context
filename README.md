# time-context

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