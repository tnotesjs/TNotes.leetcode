# [2221. 数组的三角和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2221.%20%E6%95%B0%E7%BB%84%E7%9A%84%E4%B8%89%E8%A7%92%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-triangular-sum-of-an-array/)

给你一个下标从 0 开始的整数数组 `nums` ，其中 `nums[i]` 是 `0` 到 `9` 之间（两者都包含）的一个数字。

`nums` 的 三角和 是执行以下操作以后最后剩下元素的值：

1. `nums` 初始包含 `n` 个元素。如果 `n == 1` ，终止 操作。否则，创建 一个新的下标从 0 开始的长度为 `n - 1` 的整数数组 `newNums`。
2. 对于满足 `0 <= i < n - 1` 的下标 `i` ，`newNums[i]` 赋值 为 `(nums[i] + nums[i+1]) % 10` ，`%` 表示取余运算。
3. 将 `newNums` 替换 数组 `nums`。
4. 从步骤 1 开始 重复 整个过程。

请你返回 `nums` 的三角和。

---

- 示例 1：

```txt
![](https://assets.leetcode.com/uploads/2022/02/22/ex1drawio.png)

输入：nums = [1,2,3,4,5]
输出：8
解释：
上图展示了得到数组三角和的过程。
```

- 示例 2：

```txt
输入：nums = [5]
输出：5
解释：
由于 nums 中只有一个元素，数组的三角和为这个元素自己。
```

---

提示：

- `1 <= nums.length <= 1000`
- `0 <= nums[i] <= 9`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
