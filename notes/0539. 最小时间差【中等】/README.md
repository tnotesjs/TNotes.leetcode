# [0539. 最小时间差【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0539.%20%E6%9C%80%E5%B0%8F%E6%97%B6%E9%97%B4%E5%B7%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-time-difference/)

给定一个 24 小时制（小时:分钟 **"HH:MM"**）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

---

- **示例 1：**

```txt
输入：timePoints = ["23:59","00:00"]
输出：1
```

- **示例 2：**

```txt
输入：timePoints = ["00:00","23:59","00:00"]
输出：0
```

---

**提示：**

- `2 <= timePoints.length <= 2 * 10^4`
- `timePoints[i]` 格式为 **"HH:MM"**

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
