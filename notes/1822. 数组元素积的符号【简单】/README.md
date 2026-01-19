# [1822. 数组元素积的符号【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1822.%20%E6%95%B0%E7%BB%84%E5%85%83%E7%B4%A0%E7%A7%AF%E7%9A%84%E7%AC%A6%E5%8F%B7%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 统计负号与零](#2--s1---统计负号与零)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sign-of-the-product-of-an-array/)

已知函数 `signFunc(x)` 将会根据 `x` 的正负返回特定值：

- 如果 `x` 是正数，返回 `1`。
- 如果 `x` 是负数，返回 `-1`。
- 如果 `x` 是等于 `0`，返回 `0`。

给你一个整数数组 `nums`。令 `product` 为数组 `nums` 中所有元素值的乘积。

返回 `signFunc(product)`。

---

示例 1：

```txt
输入：nums = [-1,-2,-3,-4,3,2,1]
输出：1
解释：数组中所有值的乘积是 144，且 signFunc(144) = 1
```

示例 2：

```txt
输入：nums = [1,5,0,2,-3]
输出：0
解释：数组中所有值的乘积是 0，且 signFunc(0) = 0
```

示例 3：

```txt
输入：nums = [-1,1,-1,1,-1]
输出：-1
解释：数组中所有值的乘积是 -1，且 signFunc(-1) = -1
```

---

提示：

- `1 <= nums.length <= 1000`
- `-100 <= nums[i] <= 100`

## 2. 🎯 s.1 - 统计负号与零

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$
- 空间复杂度：$O(1)$

算法思路：

- 遍历数组，遇到 0 直接返回 0；统计负数个数，最终根据奇偶性返回 1 或 -1。
