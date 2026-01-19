# [1507. 转变日期格式【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1507.%20%E8%BD%AC%E5%8F%98%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 拆分映射](#2--s1---拆分映射)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reformat-date/)

给你一个字符串 `date`，它的格式为 `Day Month Year`，其中：

- `Day` 是集合 `{"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}` 中的一个元素。
- `Month` 是集合 `{"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}` 中的一个元素。
- `Year` 的范围在 ​`[1900, 2100]` 之间。

请你将字符串转变为 `YYYY-MM-DD` 的格式，其中：

- `YYYY` 表示 4 位的年份。
- `MM` 表示 2 位的月份。
- `DD` 表示 2 位的天数。

---

示例 1：

```txt
输入：date = "20th Oct 2052"
输出："2052-10-20"
```

示例 2：

```txt
输入：date = "6th Jun 1933"
输出："1933-06-06"
```

示例 3：

```txt
输入：date = "26th May 1960"
输出："1960-05-26"
```

---

提示：

- 给定日期保证是合法的，所以不需要处理异常输入。

## 2. 🎯 s.1 - 拆分映射

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$，固定长度拆分与映射
- 空间复杂度：$O(1)$，常数字典与字符串

算法思路：

- 以空格切分得到日、月、年，日去除后缀 `st/nd/rd/th` 后左侧补零
- 月份用哈希映射到两位数字，最后拼接 `YYYY-MM-DD`
