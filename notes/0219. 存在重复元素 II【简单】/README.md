# [0219. 存在重复元素 II【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0219.%20%E5%AD%98%E5%9C%A8%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0%20II%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/contains-duplicate-ii/)

给你一个整数数组 `nums` 和一个整数 `k` ，判断数组中是否存在两个 **不同的索引**`i` 和 `j` ，满足 `nums[i] == nums[j]` 且 `abs(i - j) <= k` 。如果存在，返回 `true` ；否则，返回 `false` 。

**示例 1：**

```txt
输入：nums = [1,2,3,1], k = 3
输出：true
```

- **示例 2：**

```txt
输入：nums = [1,0,1,1], k = 1
输出：true
```

- **示例 3：**

```txt
输入：nums = [1,2,3,1,2,3], k = 2
输出：false

```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- `0 <= k <= 10^5`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
