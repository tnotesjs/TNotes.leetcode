# [3301. 高度互不相同的最大塔高和【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3301.%20%E9%AB%98%E5%BA%A6%E4%BA%92%E4%B8%8D%E7%9B%B8%E5%90%8C%E7%9A%84%E6%9C%80%E5%A4%A7%E5%A1%94%E9%AB%98%E5%92%8C%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximize-the-total-height-of-unique-towers/)

给你一个数组 `maximumHeight` ，其中 `maximumHeight[i]` 表示第 `i` 座塔可以达到的 最大 高度。

你的任务是给每一座塔分别设置一个高度，使得：

1. 第 `i` 座塔的高度是一个正整数，且不超过 `maximumHeight[i]` 。
2. 所有塔的高度互不相同。

请你返回设置完所有塔的高度后，可以达到的 最大 总高度。如果没有合法的设置，返回 `-1` 。

---

- 示例 1：

输入： maximumHeight = [2,3,4,3]

输出： 10

解释：

我们可以将塔的高度设置为：`[1, 2, 4, 3]` 。

---

- 示例 2：

输入： maximumHeight = [15,10]

输出： 25

解释：

我们可以将塔的高度设置为：`[15, 10]` 。

---

- 示例 3：

输入： maximumHeight = [2,2,1]

输出： -1

解释：

无法设置塔的高度为正整数且高度互不相同。

---

提示：

- `1 <= maximumHeight.length <= 10^5`
- `1 <= maximumHeight[i] <= 10^9`

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
