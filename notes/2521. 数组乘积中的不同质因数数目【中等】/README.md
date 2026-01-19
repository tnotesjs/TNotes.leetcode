# [2521. 数组乘积中的不同质因数数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2521.%20%E6%95%B0%E7%BB%84%E4%B9%98%E7%A7%AF%E4%B8%AD%E7%9A%84%E4%B8%8D%E5%90%8C%E8%B4%A8%E5%9B%A0%E6%95%B0%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/distinct-prime-factors-of-product-of-array/)

给你一个正整数数组 `nums`，对 `nums` 所有元素求积之后，找出并返回乘积中 不同质因数 的数目。

注意：

- 质数 是指大于 `1` 且仅能被 `1` 及自身整除的数字。
- 如果 `val2 / val1` 是一个整数，则整数 `val1` 是另一个整数 `val2` 的一个因数。

---

示例 1：

```txt
输入：nums = [2,4,3,7,10,6]
输出：4
解释：
nums 中所有元素的乘积是：2 * 4 * 3 * 7 * 10 * 6 = 10080 = 25 * 32 * 5 * 7。
共有 4 个不同的质因数，所以返回 4。
```

示例 2：

```txt
输入：nums = [2,4,8,16]
输出：1
解释：
nums 中所有元素的乘积是：2 * 4 * 8 * 16 = 1024 = 210。
共有 1 个不同的质因数，所以返回 1。
```

---

提示：

- `1 <= nums.length <= 10^4`
- `2 <= nums[i] <= 1000`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
