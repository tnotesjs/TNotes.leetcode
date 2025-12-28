# [2441. 与对应负数同时存在的最大正整数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2441.%20%E4%B8%8E%E5%AF%B9%E5%BA%94%E8%B4%9F%E6%95%B0%E5%90%8C%E6%97%B6%E5%AD%98%E5%9C%A8%E7%9A%84%E6%9C%80%E5%A4%A7%E6%AD%A3%E6%95%B4%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/largest-positive-integer-that-exists-with-its-negative/)

给你一个 不包含 任何零的整数数组 `nums` ，找出自身与对应的负数都在数组中存在的最大正整数 `k`。

返回正整数 `k` ，如果不存在这样的整数，返回 `-1`。

---

- 示例 1：

```txt
输入：nums = [-1,2,-3,3]
输出：3
解释：3 是数组中唯一一个满足题目要求的 k。
```

- 示例 2：

```txt
输入：nums = [-1,10,6,7,-7,1]
输出：7
解释：数组中存在 1 和 7 对应的负数，7 的值更大。
```

- 示例 3：

```txt
输入：nums = [-10,8,6,7,-2,-3]
输出：-1
解释：不存在满足题目要求的 k ，返回 -1。
```

---

提示：

- `1 <= nums.length <= 1000`
- `-1000 <= nums[i] <= 1000`
- `nums[i] != 0`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
