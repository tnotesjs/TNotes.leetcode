# [1154. 一年中的第几天【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1154.%20%E4%B8%80%E5%B9%B4%E4%B8%AD%E7%9A%84%E7%AC%AC%E5%87%A0%E5%A4%A9%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/day-of-the-year/)

给你一个字符串 `date` ，按 `YYYY-MM-DD` 格式表示一个 [现行公元纪年法][1] 日期。返回该日期是当年的第几天。

---

- **示例 1：**

```txt
输入：date = "2019-01-09"
输出：9
解释：给定日期是2019年的第九天。
```

- **示例 2：**

```txt
输入：date = "2019-02-10"
输出：41
```

---

**提示：**

- `date.length == 10`
- `date[4] == date[7] == '-'`，其他的 `date[i]` 都是数字
- `date` 表示的范围从 1900 年 1 月 1 日至 2019 年 12 月 31 日

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 5. 🔗 引用

- [公元][1]
  - 百度百科

[1]: https://baike.baidu.com/item/公元/17855
