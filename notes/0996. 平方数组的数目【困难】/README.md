# [0996. 平方数组的数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0996.%20%E5%B9%B3%E6%96%B9%E6%95%B0%E7%BB%84%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-squareful-arrays/)

如果一个数组的任意两个相邻元素之和都是 完全平方数 ，则该数组称为 平方数组 。

给定一个整数数组 `nums`，返回所有属于 平方数组 的 `nums` 的排列数量。

如果存在某个索引 `i` 使得 `perm1[i] != perm2[i]`，则认为两个排列 `perm1` 和 `perm2` 不同。

---

- 示例 1：

```txt
输入：nums = [1,17,8]
输出：2
解释：[1,8,17] 和 [17,8,1] 是有效的排列。
```

- 示例 2：

```txt
输入：nums = [2,2,2]
输出：1
```

---

提示：

- `1 <= nums.length <= 12`
- `0 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
