# [1007. 行相等的最少多米诺旋转【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1007.%20%E8%A1%8C%E7%9B%B8%E7%AD%89%E7%9A%84%E6%9C%80%E5%B0%91%E5%A4%9A%E7%B1%B3%E8%AF%BA%E6%97%8B%E8%BD%AC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-domino-rotations-for-equal-row/)

在一排多米诺骨牌中，`tops[i]` 和 `bottoms[i]` 分别代表第 `i` 个多米诺骨牌的上半部分和下半部分。（一个多米诺是两个从 1 到 6 的数字同列平铺形成的 —— 该平铺的每一半上都有一个数字。）

我们可以旋转第 `i` 张多米诺，使得 `tops[i]` 和 `bottoms[i]` 的值交换。

返回能使 `tops` 中所有值或者 `bottoms` 中所有值都相同的最小旋转次数。

如果无法做到，返回 `-1`.

---

- 示例 1：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-15-13-20.png)

```txt
输入：tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
输出：2
解释：
图一表示：在我们旋转之前， tops 和 bottoms 给出的多米诺牌。
如果我们旋转第二个和第四个多米诺骨牌，我们可以使上面一行中的每个值都等于 2，如图二所示。
```

- 示例 2：

```txt
输入：tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
输出：-1
解释： 在这种情况下，不可能旋转多米诺牌使一行的值相等。
```

---

提示：

- `2 <= tops.length <= 2 * 10^4`
- `bottoms.length == tops.length`
- `1 <= tops[i], bottoms[i] <= 6`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
