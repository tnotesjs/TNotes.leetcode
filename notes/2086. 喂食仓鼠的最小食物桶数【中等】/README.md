# [2086. 喂食仓鼠的最小食物桶数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2086.%20%E5%96%82%E9%A3%9F%E4%BB%93%E9%BC%A0%E7%9A%84%E6%9C%80%E5%B0%8F%E9%A3%9F%E7%89%A9%E6%A1%B6%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-number-of-food-buckets-to-feed-the-hamsters/)

给你一个下标从 0 开始的字符串 `hamsters` ，其中 `hamsters[i]` 要么是：

- `'H'` 表示有一个仓鼠在下标 `i` ，或者
- `'.'` 表示下标 `i` 是空的。

你将要在空的位置上添加一定数量的食物桶来喂养仓鼠。如果仓鼠的左边或右边至少有一个食物桶，就可以喂食它。更正式地说，如果你在位置 `i - 1` 或者 `i + 1` 放置一个食物桶，就可以喂养位置为 `i` 处的仓鼠。

在 空的位置 放置食物桶以喂养所有仓鼠的前提下，请你返回需要的 最少 食物桶数。如果无解请返回 `-1` 。

---

- 示例 1：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-14-47.png)

```txt
输入：hamsters = "H..H"
输出：2
解释：
我们可以在下标为 1 和 2 处放食物桶。
可以发现如果我们只放置 1 个食物桶，其中一只仓鼠将得不到喂养。
```

- 示例 2：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-14-52.png)

```txt
输入：street = ".H.H."
输出：1
解释：
我们可以在下标为 2 处放置一个食物桶。
```

- 示例 3：

```txt
输入：street = ".HHH."
输出：-1
解释：
如果我们如图那样在每个空位放置食物桶，下标 2 处的仓鼠将吃不到食物。
```

---

提示：

- `1 <= hamsters.length <= 10^5`
- `hamsters[i]` 要么是 `'H'` ，要么是 `'.'` 。

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
