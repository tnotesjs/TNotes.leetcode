# [2758. 下一天【简单】🔒](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2758.%20%E4%B8%8B%E4%B8%80%E5%A4%A9%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91%F0%9F%94%92)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1](#2--s1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/next-day)

请你编写一个有关日期对象的方法，使得任何日期对象都可以调用 `date.nextDay()` 方法，然后返回调用日期对象的下一天，格式为 YYYY-MM-DD。

示例 1：

输入：`date = "2014-06-20"`

输出：`"2014-06-21"`

解释：

```js
const date = new Date('2014-06-20')
date.nextDay() // "2014-06-21"
```

示例 2：

- 输入：`date = "2017-10-31"`
- 输出：`"2017-11-01"`
- 解释：日期 2017-10-31 的下一天是 2017-11-01.

Constraints:

- `new Date(date)` 是一个有效的日期对象

## 2. 🎯 s.1

```javascript
/**
 * @return {string}
 */
Date.prototype.nextDay = function () {
  const nextDate = new Date(this.valueOf())
  nextDate.setDate(this.getDate() + 1)

  const year = nextDate.getFullYear()
  const month = (nextDate.getMonth() + 1).toString().padStart(2, '0')
  const day = nextDate.getDate().toString().padStart(2, '0')

  return `${year}-${month}-${day}`
}

/**
 * const date = new Date("2014-06-20");
 * date.nextDay(); // "2014-06-21"
 */
```

`const nextDate = new Date(this.valueOf())`，创建一个新的日期对象以避免修改原始日期。
