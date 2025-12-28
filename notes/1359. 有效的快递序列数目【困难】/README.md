# [1359. 有效的快递序列数目【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1359.%20%E6%9C%89%E6%95%88%E7%9A%84%E5%BF%AB%E9%80%92%E5%BA%8F%E5%88%97%E6%95%B0%E7%9B%AE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-all-valid-pickup-and-delivery-options/)

给你 `n` 笔订单，每笔订单都需要快递服务。

计算所有有效的 取货 / 交付 可能的顺序，使 `delivery(i)` 总是在 `pickup(i)` 之后。

由于答案可能很大，请返回答案对 10^9 + 7 取余的结果。

---

示例 1：

```txt
输入：n = 1
输出：1
解释：只有一种序列 (P1, D1)，物品 1 的配送服务（D1）在物品 1 的收件服务（P1）后。
```

示例 2：

```txt
输入：n = 2
输出：6
解释：所有可能的序列包括：
(P1,P2,D1,D2)，(P1,P2,D2,D1)，(P1,D1,P2,D2)，(P2,P1,D1,D2)，(P2,P1,D2,D1) 和 (P2,D2,P1,D1)。
(P1,D2,P2,D1) 是一个无效的序列，因为物品 2 的收件服务（P2）不应在物品 2 的配送服务（D2）之后。
```

示例 3：

```txt
输入：n = 3
输出：90
```

---

提示：

- `1 <= n <= 500`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
