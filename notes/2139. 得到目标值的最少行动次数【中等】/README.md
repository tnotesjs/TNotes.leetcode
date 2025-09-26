# [2139. 得到目标值的最少行动次数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2139.%20%E5%BE%97%E5%88%B0%E7%9B%AE%E6%A0%87%E5%80%BC%E7%9A%84%E6%9C%80%E5%B0%91%E8%A1%8C%E5%8A%A8%E6%AC%A1%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-moves-to-reach-target-score/)

你正在玩一个整数游戏。从整数 `1` 开始，期望得到整数 `target` 。

在一次行动中，你可以做下述两种操作之一：

- **递增**，将当前整数的值加 1（即， `x = x + 1`）。
- **加倍**，使当前整数的值翻倍（即，`x = 2 * x`）。

在整个游戏过程中，你可以使用 **递增** 操作 **任意** 次数。但是只能使用 **加倍** 操作 **至多** `maxDoubles` 次。

给你两个整数 `target` 和 `maxDoubles` ，返回从 1 开始得到 `target` 需要的最少行动次数。

---

- **示例 1：**

```txt
输入：target = 5, maxDoubles = 0
输出：4
解释：一直递增 1 直到得到 target 。
```

- **示例 2：**

```txt
输入：target = 19, maxDoubles = 2
输出：7
解释：最初，x = 1 。
递增 3 次，x = 4 。
加倍 1 次，x = 8 。
递增 1 次，x = 9 。
加倍 1 次，x = 18 。
递增 1 次，x = 19 。
```

- **示例 3：**

```txt
输入：target = 10, maxDoubles = 4
输出：4
解释：
最初，x = 1 。
递增 1 次，x = 2 。
加倍 1 次，x = 4 。
递增 1 次，x = 5 。
加倍 1 次，x = 10 。
```

---

**提示：**

- `1 <= target <= 10^9`
- `0 <= maxDoubles <= 100`

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
