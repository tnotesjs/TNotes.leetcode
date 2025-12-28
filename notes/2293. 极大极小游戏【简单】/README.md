# [2293. 极大极小游戏【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2293.%20%E6%9E%81%E5%A4%A7%E6%9E%81%E5%B0%8F%E6%B8%B8%E6%88%8F%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/min-max-game/)

给你一个下标从 0 开始的整数数组 `nums` ，其长度是 `2` 的幂。

对 `nums` 执行下述算法：

1. 设 `n` 等于 `nums` 的长度，如果 `n == 1` ，终止 算法过程。否则，创建 一个新的整数数组 `newNums` ，新数组长度为 `n / 2` ，下标从 0 开始。
2. 对于满足 `0 <= i < n / 2` 的每个 偶数 下标 `i` ，将 `newNums[i]` 赋值 为 `min(nums[2 * i], nums[2 * i + 1])`。
3. 对于满足 `0 <= i < n / 2` 的每个 奇数 下标 `i` ，将 `newNums[i]` 赋值 为 `max(nums[2 * i], nums[2 * i + 1])`。
4. 用 `newNums` 替换 `nums`。
5. 从步骤 1 开始 重复 整个过程。

执行算法后，返回 `nums` 中剩下的那个数字。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-27-13-21-48.png)

```txt
输入：nums = [1,3,5,2,4,8,2,2]
输出：1
解释：重复执行算法会得到下述数组。
第一轮：nums = [1,5,4,2]
第二轮：nums = [1,4]
第三轮：nums = [1]
1 是最后剩下的那个数字，返回 1。
```

示例 2：

```txt
输入：nums = [3]
输出：3
解释：3 就是最后剩下的数字，返回 3。
```

---

提示：

- `1 <= nums.length <= 1024`
- `1 <= nums[i] <= 10^9`
- `nums.length` 是 `2` 的幂

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
