# [1150. 检查一个数是否在数组中占绝大多数【简单】🔒](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1150.%20%E6%A3%80%E6%9F%A5%E4%B8%80%E4%B8%AA%E6%95%B0%E6%98%AF%E5%90%A6%E5%9C%A8%E6%95%B0%E7%BB%84%E4%B8%AD%E5%8D%A0%E7%BB%9D%E5%A4%A7%E5%A4%9A%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91%F0%9F%94%92)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 二分定位 + 下标偏移判多数](#2--s1---二分定位--下标偏移判多数)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-a-number-is-majority-element-in-a-sorted-array/)

## 2. 🎯 s.1 - 二分定位 + 下标偏移判多数

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(\\log n)$
- 空间复杂度：$O(1)$

算法思路：

- 在已排序数组中用二分找到 `target` 的左端点 `L`
- 检查位置 `L + \\lfloor n/2 \\rfloor` 是否仍为 `target`
- 若为真则出现次数超过一半，否则不足半数
