# [1785. 构成特定和需要添加的最少元素【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1785.%20%E6%9E%84%E6%88%90%E7%89%B9%E5%AE%9A%E5%92%8C%E9%9C%80%E8%A6%81%E6%B7%BB%E5%8A%A0%E7%9A%84%E6%9C%80%E5%B0%91%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-elements-to-add-to-form-a-given-sum/)

给你一个整数数组 `nums` ，和两个整数 `limit` 与 `goal` 。数组 `nums` 有一条重要属性：`abs(nums[i]) <= limit` 。

返回使数组元素总和等于 `goal` 所需要向数组中添加的 **最少元素数量** ，添加元素 **不应改变** 数组中 `abs(nums[i]) <= limit` 这一属性。

注意，如果 `x >= 0` ，那么 `abs(x)` 等于 `x` ；否则，等于 `-x` 。

---

- **示例 1：**

```txt
输入：nums = [1,-1,1], limit = 3, goal = -4
输出：2
解释：可以将 -2 和 -3 添加到数组中，数组的元素总和变为 1 - 1 + 1 - 2 - 3 = -4 。
```

- **示例 2：**

```txt
输入：nums = [1,-10,9,1], limit = 100, goal = 0
输出：1
```

---

**提示：**

- `1 <= nums.length <= 10^5`
- `1 <= limit <= 10^6`
- `-limit <= nums[i] <= limit`
- `-10^9 <= goal <= 10^9`

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
