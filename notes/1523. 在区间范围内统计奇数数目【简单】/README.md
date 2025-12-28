# [1523. 在区间范围内统计奇数数目【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1523.%20%E5%9C%A8%E5%8C%BA%E9%97%B4%E8%8C%83%E5%9B%B4%E5%86%85%E7%BB%9F%E8%AE%A1%E5%A5%87%E6%95%B0%E6%95%B0%E7%9B%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-odd-numbers-in-an-interval-range/)

给你两个非负整数 `low` 和 `high`。请你返回 `low` 和 `high` 之间（包括二者）奇数的数目。

---

- 示例 1：

```txt
输入：low = 3, high = 7
输出：3
解释：3 到 7 之间奇数数字为 [3,5,7]。
```

- 示例 2：

```txt
输入：low = 8, high = 10
输出：1
解释：8 到 10 之间奇数数字为 [9]。
```

---

提示：

- `0 <= low <= high <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
