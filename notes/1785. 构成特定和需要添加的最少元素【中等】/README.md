# [1785. 构成特定和需要添加的最少元素【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1785.%20%E6%9E%84%E6%88%90%E7%89%B9%E5%AE%9A%E5%92%8C%E9%9C%80%E8%A6%81%E6%B7%BB%E5%8A%A0%E7%9A%84%E6%9C%80%E5%B0%91%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 数学](#2--s1---数学)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-elements-to-add-to-form-a-given-sum/)

给你一个整数数组 `nums`，和两个整数 `limit` 与 `goal`。数组 `nums` 有一条重要属性：`abs(nums[i]) <= limit`。

返回使数组元素总和等于 `goal` 所需要向数组中添加的 最少元素数量，添加元素 不应改变 数组中 `abs(nums[i]) <= limit` 这一属性。

注意，如果 `x >= 0`，那么 `abs(x)` 等于 `x` ；否则，等于 `-x`。

---

示例 1：

```txt
输入：nums = [1,-1,1], limit = 3, goal = -4
输出：2
解释：可以将 -2 和 -3 添加到数组中，数组的元素总和变为 1 - 1 + 1 - 2 - 3 = -4。
```

示例 2：

```txt
输入：nums = [1,-10,9,1], limit = 100, goal = 0
输出：1
```

---

提示：

- `1 <= nums.length <= 10^5`
- `1 <= limit <= 10^6`
- `-limit <= nums[i] <= limit`
- `-10^9 <= goal <= 10^9`

## 2. 🎯 s.1 - 数学

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是数组长度
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 计算数组和与目标值的差值 diff
- 每次添加的元素绝对值不超过 limit
- 所需元素数 = ceil(|diff| / limit)
