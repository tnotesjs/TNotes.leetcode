# [2600. K 件物品的最大和【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2600.%20K%20%E4%BB%B6%E7%89%A9%E5%93%81%E7%9A%84%E6%9C%80%E5%A4%A7%E5%92%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/k-items-with-the-maximum-sum/)

袋子中装有一些物品，每个物品上都标记着数字 `1` 、`0` 或 `-1` 。

给你四个非负整数 `numOnes` 、`numZeros` 、`numNegOnes` 和 `k` 。

袋子最初包含：

- `numOnes` 件标记为 `1` 的物品。
- `numZeros` 件标记为 `0` 的物品。
- `numNegOnes` 件标记为 `-1` 的物品。

现计划从这些物品中恰好选出 `k` 件物品。返回所有可行方案中，物品上所标记数字之和的最大值。

---

- 示例 1：

```txt
输入：numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2
输出：2
解释：袋子中的物品分别标记为 {1, 1, 1, 0, 0} 。取 2 件标记为 1 的物品，得到的数字之和为 2 。
可以证明 2 是所有可行方案中的最大值。
```

---

- 示例 2：

```txt
输入：numOnes = 3, numZeros = 2, numNegOnes = 0, k = 4
输出：3
解释：袋子中的物品分别标记为 {1, 1, 1, 0, 0} 。取 3 件标记为 1 的物品，1 件标记为 0 的物品，得到的数字之和为 3 。
可以证明 3 是所有可行方案中的最大值。
```

---

提示：

- `0 <= numOnes, numZeros, numNegOnes <= 50`
- `0 <= k <= numOnes + numZeros + numNegOnes`

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
