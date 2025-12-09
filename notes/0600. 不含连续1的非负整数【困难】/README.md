# [0600. 不含连续 1 的非负整数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0600.%20%E4%B8%8D%E5%90%AB%E8%BF%9E%E7%BB%AD1%E7%9A%84%E9%9D%9E%E8%B4%9F%E6%95%B4%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/non-negative-integers-without-consecutive-ones)

给定一个正整数 `n` ，请你统计在 `[0, n]` 范围的非负整数中，有多少个整数的二进制表示中不存在 **连续的 1** 。

---

- 示例 1：

```txt
输入: n = 5
输出: 5
解释:
下面列出范围在 [0, 5] 的非负整数与其对应的二进制表示：
0 : 0
1 : 1
2 : 10
3 : 11
4 : 100
5 : 101
其中，只有整数 3 违反规则（有两个连续的 1 ），其他 5 个满足规则。
```

- 示例 2：

```txt
输入: n = 1
输出: 2
```

- 示例 3：

```txt
输入: n = 2
输出: 3
```

---

提示：

- `1 <= n <= 10^9`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
