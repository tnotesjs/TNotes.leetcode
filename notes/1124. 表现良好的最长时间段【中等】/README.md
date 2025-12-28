# [1124. 表现良好的最长时间段【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1124.%20%E8%A1%A8%E7%8E%B0%E8%89%AF%E5%A5%BD%E7%9A%84%E6%9C%80%E9%95%BF%E6%97%B6%E9%97%B4%E6%AE%B5%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-well-performing-interval/)

给你一份工作时间表 `hours`，上面记录着某一位员工每天的工作小时数。

我们认为当员工一天中的工作小时数大于 `8` 小时的时候，那么这一天就是「劳累的一天」。

所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。

请你返回「表现良好时间段」的最大长度。

---

示例 1：

```txt
输入：hours = [9,9,6,0,6,6,9]
输出：3
解释：最长的表现良好时间段是 [9,9,6]。
```

示例 2：

```txt
输入：hours = [6,6,6]
输出：0
```

---

提示：

- `1 <= hours.length <= 10^4`
- `0 <= hours[i] <= 16`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
