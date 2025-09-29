# [3427. 变长子数组求和【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3427.%20%E5%8F%98%E9%95%BF%E5%AD%90%E6%95%B0%E7%BB%84%E6%B1%82%E5%92%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/sum-of-variable-length-subarrays/)

给你一个长度为 `n` 的整数数组 `nums` 。对于 **每个** 下标 `i`（`0 <= i < n`），定义对应的子数组 `nums[start ... i]`（`start = max(0, i - nums[i])`）。

返回为数组中每个下标定义的子数组中所有元素的总和。

**子数组** 是数组中的一个连续、**非空** 的元素序列。

---

- **示例 1：**

**输入：** nums = [2,3,1]

**输出：** 11

**解释：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-03-37.png)

总和为 11 。因此，输出 11 。

---

- **示例 2：**

**输入：** nums = [3,1,1,2]

**输出：** 13

**解释：**

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-03-47.png)

总和为 13 。因此，输出为 13 。

---

**提示：**

- `1 <= n == nums.length <= 100`
- `1 <= nums[i] <= 1000`

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
