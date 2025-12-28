# [0386. 字典序排数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0386.%20%E5%AD%97%E5%85%B8%E5%BA%8F%E6%8E%92%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/lexicographical-numbers/)

给你一个整数 `n` ，按字典序返回范围 `[1, n]` 内所有整数。

你必须设计一个时间复杂度为 `O(n)` 且使用 `O(1)` 额外空间的算法。

---

示例 1：

```txt
输入：n = 13
输出：[1,10,11,12,13,2,3,4,5,6,7,8,9]
```

示例 2：

```txt
输入：n = 2
输出：[1,2]
```

---

提示：

- `1 <= n <= 5 * 10^4`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
