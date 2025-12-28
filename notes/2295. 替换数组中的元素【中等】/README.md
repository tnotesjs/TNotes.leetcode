# [2295. 替换数组中的元素【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2295.%20%E6%9B%BF%E6%8D%A2%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E5%85%83%E7%B4%A0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/replace-elements-in-an-array/)

给你一个下标从 0 开始的数组 `nums` ，它包含 `n` 个 互不相同 的正整数。请你对这个数组执行 `m` 个操作，在第 `i` 个操作中，你需要将数字 `operations[i][0]` 替换成 `operations[i][1]`。

题目保证在第 `i` 个操作中：

- `operations[i][0]` 在 `nums` 中存在。
- `operations[i][1]` 在 `nums` 中不存在。

请你返回执行完所有操作后的数组。

---

- 示例 1：

```txt
输入：nums = [1,2,4,6], operations = [[1,3],[4,7],[6,1]]
输出：[3,2,7,1]
解释：我们对 nums 执行以下操作：
- 将数字 1 替换为 3。nums 变为 [3,2,4,6]。
- 将数字 4 替换为 7。nums 变为 [3,2,7,6]。
- 将数字 6 替换为 1。nums 变为 [3,2,7,1]。
返回最终数组 [3,2,7,1]。
```

- 示例 2：

```txt
输入：nums = [1,2], operations = [[1,3],[2,1],[3,2]]
输出：[2,1]
解释：我们对 nums 执行以下操作：
- 将数字 1 替换为 3。nums 变为 [3,2]。
- 将数字 2 替换为 1。nums 变为 [3,1]。
- 将数字 3 替换为 2。nums 变为 [2,1]。
返回最终数组 [2,1]。
```

---

提示：

- `n == nums.length`
- `m == operations.length`
- `1 <= n, m <= 10^5`
- `nums` 中所有数字 互不相同。
- `operations[i].length == 2`
- `1 <= nums[i], operations[i][0], operations[i][1] <= 10^6`
- 在执行第 `i` 个操作时，`operations[i][0]` 在 `nums` 中存在。
- 在执行第 `i` 个操作时，`operations[i][1]` 在 `nums` 中不存在。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
