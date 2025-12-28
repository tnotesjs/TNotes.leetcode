# [1952. 三除数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1952.%20%E4%B8%89%E9%99%A4%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/three-divisors/)

给你一个整数 `n`。如果 `n` 恰好有三个正除数 ，返回 `true` ；否则，返回 `false`。

如果存在整数 `k` ，满足 `n = k * m` ，那么整数 `m` 就是 `n` 的一个 除数。

---

示例 1：

```txt
输入：n = 2
输出：false
解释：2 只有两个除数：1 和 2。
```

示例 2：

```txt
输入：n = 4
输出：true
解释：4 有三个除数：1、2 和 4。
```

---

提示：

- `1 <= n <= 10^4`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
