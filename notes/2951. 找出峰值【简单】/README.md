# [2951. 找出峰值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2951.%20%E6%89%BE%E5%87%BA%E5%B3%B0%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-the-peaks/)

给你一个下标从 **0** 开始的数组 `mountain` 。你的任务是找出数组 `mountain` 中的所有 **峰值**。

以数组形式返回给定数组中 **峰值** 的下标，**顺序不限** 。

**注意：**

- **峰值** 是指一个严格大于其相邻元素的元素。
- 数组的第一个和最后一个元素 **不** 是峰值。

---

- **示例 1：**

```txt
输入：mountain = [2,4,4]
输出：[]
解释：mountain[0] 和 mountain[2] 不可能是峰值，因为它们是数组的第一个和最后一个元素。
mountain[1] 也不可能是峰值，因为它不严格大于 mountain[2] 。
因此，答案为 [] 。
```

- **示例 2：**

```txt
输入：mountain = [1,4,3,8,5]
输出：[1,3]
解释：mountain[0] 和 mountain[4] 不可能是峰值，因为它们是数组的第一个和最后一个元素。
mountain[2] 也不可能是峰值，因为它不严格大于 mountain[3] 和 mountain[1] 。
但是 mountain[1] 和 mountain[3] 严格大于它们的相邻元素。
因此，答案是 [1,3] 。
```

---

**提示：**

- `3 <= mountain.length <= 100`
- `1 <= mountain[i] <= 100`

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
