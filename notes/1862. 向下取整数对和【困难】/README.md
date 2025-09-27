# [1862. 向下取整数对和【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1862.%20%E5%90%91%E4%B8%8B%E5%8F%96%E6%95%B4%E6%95%B0%E5%AF%B9%E5%92%8C%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-floored-pairs/)

给你一个整数数组 `nums` ，请你返回所有下标对 `0 <= i, j < nums.length` 的 `floor(nums[i] / nums[j])` 结果之和。由于答案可能会很大，请你返回答案对`10^9 + 7` **取余** 的结果。

函数 `floor()` 返回输入数字的整数部分。

---

- **示例 1：**

```txt
输入：nums = [2,5,9]
输出：10
解释：
floor(2 / 5) = floor(2 / 9) = floor(5 / 9) = 0
floor(2 / 2) = floor(5 / 5) = floor(9 / 9) = 1
floor(5 / 2) = 2
floor(9 / 2) = 4
floor(9 / 5) = 1
我们计算每一个数对商向下取整的结果并求和得到 10 。
```

- **示例 2：**

```txt
输入：nums = [7,7,7,7,7,7,7]
输出：49
```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
