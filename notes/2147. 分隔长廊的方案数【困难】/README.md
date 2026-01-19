# [2147. 分隔长廊的方案数【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2147.%20%E5%88%86%E9%9A%94%E9%95%BF%E5%BB%8A%E7%9A%84%E6%96%B9%E6%A1%88%E6%95%B0%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-ways-to-divide-a-long-corridor/)

在一个图书馆的长廊里，有一些座位和装饰植物排成一列。给你一个下标从 0 开始，长度为 `n` 的字符串 `corridor`，它包含字母 `'S'` 和 `'P'`，其中每个 `'S'` 表示一个座位，每个 `'P'` 表示一株植物。

在下标 `0` 的左边和下标 `n - 1` 的右边 已经 分别各放了一个屏风。你还需要额外放置一些屏风。每一个位置 `i - 1` 和 `i` 之间（`1 <= i <= n - 1`），至多能放一个屏风。

请你将走廊用屏风划分为若干段，且每一段内都 恰好有两个座位，而每一段内植物的数目没有要求。可能有多种划分方案，如果两个方案中有任何一个屏风的位置不同，那么它们被视为 不同 方案。

请你返回划分走廊的方案数。由于答案可能很大，请你返回它对 `10^9 + 7` 取余 的结果。如果没有任何方案，请返回 `0`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-45-52.png)

```txt
输入：corridor = "SSPPSPS"
输出：3
解释：总共有 3 种不同分隔走廊的方案。
上图中黑色的竖线表示已经放置好的屏风。
上图每种方案中，每一段都恰好有 两个 座位。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-45-57.png)

```txt
输入：corridor = "PPSPSP"
输出：1
解释：只有 1 种分隔走廊的方案，就是不放置任何屏风。
放置任何的屏风都会导致有一段无法恰好有 2 个座位。
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-46-03.png)

```txt
输入：corridor = "S"
输出：0
解释：没有任何方案，因为总是有一段无法恰好有 2 个座位。
```

---

提示：

- `n == corridor.length`
- `1 <= n <= 10^5`
- `corridor[i]` 要么是 `'S'`，要么是 `'P'`。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
