# [3490. 统计美丽整数的数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3490.%20%E7%BB%9F%E8%AE%A1%E7%BE%8E%E4%B8%BD%E6%95%B4%E6%95%B0%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-beautiful-numbers/)

给你两个正整数 `l` 和 `r`。如果正整数每一位上的数字的乘积可以被这些数字之和整除，则认为该整数是一个 美丽整数。

统计并返回 `l` 和 `r` 之间（包括 `l` 和 `r` ）的 美丽整数 的数目。

---

- 示例 1：

输入： l = 10, r = 20

输出： 2

解释：

范围内的美丽整数为 10 和 20。

---

- 示例 2：

输入： l = 1, r = 15

输出： 10

解释：

范围内的美丽整数为 1、2、3、4、5、6、7、8、9 和 10。

---

提示：

- `1 <= l <= r < 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
