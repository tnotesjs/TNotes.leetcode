# [3234. 统计 1 显著的字符串的数量【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3234.%20%E7%BB%9F%E8%AE%A1%201%20%E6%98%BE%E8%91%97%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%95%B0%E9%87%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-the-number-of-substrings-with-dominant-ones/)

给你一个二进制字符串 `s`。

请你统计并返回其中 1 显著 的 子字符串 的数量。

> 子字符串 是字符串中连续的 非空 字符序列。

如果字符串中 1 的数量 大于或等于 0 的数量的 平方，则认为该字符串是一个 1 显著 的字符串。

---

示例 1：

输入：s = "00011"

输出：5

解释：

1 显著的子字符串如下表所示。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-29-20.png)

---

示例 2：

输入：s = "101101"

输出：16

解释：

1 不显著的子字符串如下表所示。

总共有 21 个子字符串，其中 5 个是 1 不显著字符串，因此有 16 个 1 显著子字符串。

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-12-29-36.png)

---

提示：

- `1 <= s.length <= 4 * 10^4`
- `s` 仅包含字符 `'0'` 和 `'1'`。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
