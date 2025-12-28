# [2206. 将数组划分成相等数对【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2206.%20%E5%B0%86%E6%95%B0%E7%BB%84%E5%88%92%E5%88%86%E6%88%90%E7%9B%B8%E7%AD%89%E6%95%B0%E5%AF%B9%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/divide-array-into-equal-pairs/)

给你一个整数数组 `nums` ，它包含 `2 * n` 个整数。

你需要将 `nums` 划分成 `n` 个数对，满足：

- 每个元素 只属于一个 数对。
- 同一数对中的元素 相等。

如果可以将 `nums` 划分成 `n` 个数对，请你返回 `true` ，否则返回 `false`。

---

示例 1：

```txt
输入：nums = [3,2,3,2,2,2]
输出：true
解释：
nums 中总共有 6 个元素，所以它们应该被划分成 6 / 2 = 3 个数对。
nums 可以划分成 (2, 2) ，(3, 3) 和 (2, 2) ，满足所有要求。
```

示例 2：

```txt
输入：nums = [1,2,3,4]
输出：false
解释：
无法将 nums 划分成 4 / 2 = 2 个数对且满足所有要求。
```

---

提示：

- `nums.length == 2 * n`
- `1 <= n <= 500`
- `1 <= nums[i] <= 500`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
