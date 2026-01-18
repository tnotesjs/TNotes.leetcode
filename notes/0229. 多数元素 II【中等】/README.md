# [0229. 多数元素 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0229.%20%E5%A4%9A%E6%95%B0%E5%85%83%E7%B4%A0%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/majority-element-ii/)

给定一个大小为 _n_ 的整数数组，找出其中所有出现超过 `⌊ n/3 ⌋` 次的元素。

示例 1：

```txt
输入：nums = [3,2,3]
输出：[3]
```

示例 2：

```txt
输入：nums = [1]
输出：[1]
```

示例 3：

```txt
输入：nums = [1,2]
输出：[1,2]
```

---

提示：

- `1 <= nums.length <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1)的算法解决此问题。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
