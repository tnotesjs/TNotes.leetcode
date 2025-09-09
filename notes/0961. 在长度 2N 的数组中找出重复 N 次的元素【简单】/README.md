# [0961. 在长度 2N 的数组中找出重复 N 次的元素【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0961.%20%E5%9C%A8%E9%95%BF%E5%BA%A6%202N%20%E7%9A%84%E6%95%B0%E7%BB%84%E4%B8%AD%E6%89%BE%E5%87%BA%E9%87%8D%E5%A4%8D%20N%20%E6%AC%A1%E7%9A%84%E5%85%83%E7%B4%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/n-repeated-element-in-size-2n-array/)

给你一个整数数组 `nums` ，该数组具有以下属性：

- `nums.length == 2 * n`.
- `nums` 包含 `n + 1` 个 **不同的** 元素
- `nums` 中恰有一个元素重复 `n` 次

找出并返回重复了 `n` 次的那个元素。

---

- **示例 1：**

```txt
输入：nums = [1,2,3,3]
输出：3
```

- **示例 2：**

```txt
输入：nums = [2,1,2,5,3,2]
输出：2
```

- **示例 3：**

```txt
输入：nums = [5,1,5,2,5,3,5,4]
输出：5
```

---

**提示：**

- `2 <= n <= 5000`
- `nums.length == 2 * n`
- `0 <= nums[i] <= 10^4`
- `nums` 由 `n + 1` 个 **不同的** 元素组成，且其中一个元素恰好重复 `n` 次

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
