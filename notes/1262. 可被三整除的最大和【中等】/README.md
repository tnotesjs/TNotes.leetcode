# [1262. 可被三整除的最大和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1262.%20%E5%8F%AF%E8%A2%AB%E4%B8%89%E6%95%B4%E9%99%A4%E7%9A%84%E6%9C%80%E5%A4%A7%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/greatest-sum-divisible-by-three/)

给你一个整数数组 `nums`，请你找出并返回能被三整除的元素 最大和。

---

- 示例 1：

```txt
输入：nums = [3,6,5,1,8]
输出：18
解释：选出数字 3, 6, 1 和 8，它们的和是 18（可被 3 整除的最大和）。
```

- 示例 2：

```txt
输入：nums = [4]
输出：0
解释：4 不能被 3 整除，所以无法选出数字，返回 0。
```

- 示例 3：

```txt
输入：nums = [1,2,3,4,4]
输出：12
解释：选出数字 1, 3, 4 以及 4，它们的和是 12（可被 3 整除的最大和）。
```

---

提示：

- `1 <= nums.length <= 4 * 10^4`
- `1 <= nums[i] <= 10^4`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
