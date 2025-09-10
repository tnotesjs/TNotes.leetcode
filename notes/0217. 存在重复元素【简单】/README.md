# [0217. 存在重复元素【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0217.%20%E5%AD%98%E5%9C%A8%E9%87%8D%E5%A4%8D%E5%85%83%E7%B4%A0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/contains-duplicate/)

给你一个整数数组 `nums` 。如果任一值在数组中出现 **至少两次** ，返回 `true` ；如果数组中每个元素互不相同，返回 `false` 。

---

- **示例 1：**

```txt
输入：nums = [1,2,3,1]
输出：true

解释：
元素 1 在下标 0 和 3 出现。
```

- **示例 2：**

```txt
输入：nums = [1,2,3,4]
输出：false

解释：
所有元素都不同。
```

- **示例 3：**

```txt
输入：nums = [1,1,1,3,3,4,3,2,4,2]
输出：true
```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
