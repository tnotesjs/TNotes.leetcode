# [1833. 雪糕的最大数量【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1833.%20%E9%9B%AA%E7%B3%95%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E9%87%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-ice-cream-bars/)

夏日炎炎，小男孩 Tony 想买一些雪糕消消暑。

商店中新到 `n` 支雪糕，用长度为 `n` 的数组 `costs` 表示雪糕的定价，其中 `costs[i]` 表示第 `i` 支雪糕的现金价格。Tony 一共有 `coins` 现金可以用于消费，他想要买尽可能多的雪糕。

---

注意： Tony 可以按任意顺序购买雪糕。

给你价格数组 `costs` 和现金量 `coins` ，请你计算并返回 Tony 用 `coins` 现金能够买到的雪糕的 最大数量 。

你必须使用计数排序解决此问题。

---

- 示例 1：

```txt
输入：costs = [1,3,2,4,1], coins = 7
输出：4
解释：Tony 可以买下标为 0、1、2、4 的雪糕，总价为 1 + 3 + 2 + 1 = 7
```

- 示例 2：

```txt
输入：costs = [10,6,8,7,7,8], coins = 5
输出：0
解释：Tony 没有足够的钱买任何一支雪糕。
```

- 示例 3：

```txt
输入：costs = [1,6,3,1,2,5], coins = 20
输出：6
解释：Tony 可以买下所有的雪糕，总价为 1 + 6 + 3 + 1 + 2 + 5 = 18 。
```

---

提示：

- `costs.length == n`
- `1 <= n <= 10^5`
- `1 <= costs[i] <= 10^5`
- `1 <= coins <= 10^8`

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
