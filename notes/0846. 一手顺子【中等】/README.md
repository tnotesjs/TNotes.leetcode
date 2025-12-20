# [0846. 一手顺子【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0846.%20%E4%B8%80%E6%89%8B%E9%A1%BA%E5%AD%90%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)
- [5. 🔗 引用](#5--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/hand-of-straights/)

Alice 手中有一把牌，她想要重新排列这些牌，分成若干组，使每一组的牌数都是 `groupSize` ，并且由 `groupSize` 张连续的牌组成。

给你一个整数数组 `hand` 其中 `hand[i]` 是写在第 `i` 张牌上的 数值。如果她可能重新排列这些牌，返回 `true` ；否则，返回 `false` 。

---

- 示例 1：

```txt
输入：hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
输出：true
解释：Alice 手中的牌可以被重新排列为 [1,2,3]，[2,3,4]，[6,7,8]。
```

- 示例 2：

```txt
输入：hand = [1,2,3,4,5], groupSize = 4
输出：false
解释：Alice 手中的牌无法被重新排列成几个大小为 4 的组。
```

---

提示：

- `1 <= hand.length <= 10^4`
- `0 <= hand[i] <= 10^9`
- `1 <= groupSize <= hand.length`

---

注意： 此题目与 [1296. 划分数组为连续数字的集合][1] 重复：

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

## 5. 🔗 引用

- [1296. 划分数组为连续数字的集合][1]

[1]: https://leetcode.cn/problems/divide-array-in-sets-of-k-consecutive-numbers/description/
