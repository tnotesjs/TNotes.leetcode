# [2400. 恰好移动 k 步到达某一位置的方法数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2400.%20%E6%81%B0%E5%A5%BD%E7%A7%BB%E5%8A%A8%20k%20%E6%AD%A5%E5%88%B0%E8%BE%BE%E6%9F%90%E4%B8%80%E4%BD%8D%E7%BD%AE%E7%9A%84%E6%96%B9%E6%B3%95%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-ways-to-reach-a-position-after-exactly-k-steps/)

给你两个 正 整数 `startPos` 和 `endPos`。最初，你站在 无限 数轴上位置 `startPos` 处。在一步移动中，你可以向左或者向右移动一个位置。

给你一个正整数 `k` ，返回从 `startPos` 出发、恰好 移动 `k` 步并到达 `endPos` 的 不同 方法数目。由于答案可能会很大，返回对 `10^9 + 7` 取余 的结果。

如果所执行移动的顺序不完全相同，则认为两种方法不同。

---

注意： 数轴包含负整数。

---

- 示例 1：

```txt
输入：startPos = 1, endPos = 2, k = 3
输出：3
解释：存在 3 种从 1 到 2 且恰好移动 3 步的方法：
- 1 -> 2 -> 3 -> 2.
- 1 -> 2 -> 1 -> 2.
- 1 -> 0 -> 1 -> 2.
可以证明不存在其他方法，所以返回 3。
```

- 示例 2：

```txt
输入：startPos = 2, endPos = 5, k = 10
输出：0
解释：不存在从 2 到 5 且恰好移动 10 步的方法。
```

---

提示：

- `1 <= startPos, endPos, k <= 1000`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
