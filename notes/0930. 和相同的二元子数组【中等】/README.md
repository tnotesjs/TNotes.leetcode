# [0930. 和相同的二元子数组【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0930.%20%E5%92%8C%E7%9B%B8%E5%90%8C%E7%9A%84%E4%BA%8C%E5%85%83%E5%AD%90%E6%95%B0%E7%BB%84%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/binary-subarrays-with-sum/)

给你一个二元数组 `nums` ，和一个整数 `goal` ，请你统计并返回有多少个和为 `goal` 的 非空 子数组。

子数组 是数组的一段连续部分。

---

示例 1：

```txt
输入：nums = [1,0,1,0,1], goal = 2
输出：4
解释：
有 4 个满足题目要求的子数组：[1,0,1]、[1,0,1,0]、[0,1,0,1]、[1,0,1]
```

示例 2：

```txt
输入：nums = [0,0,0,0,0], goal = 0
输出：15
```

---

提示：

- `1 <= nums.length <= 3 * 10^4`
- `nums[i]` 不是 `0` 就是 `1`
- `0 <= goal <= nums.length`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
