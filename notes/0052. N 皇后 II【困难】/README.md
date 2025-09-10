# [0052. N 皇后 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0052.%20N%20%E7%9A%87%E5%90%8E%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/n-queens-ii/)

**n  皇后问题** 研究的是如何将 `n`  个皇后放置在 `n × n` 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 `n` ，返回 **n 皇后问题** 不同的解决方案的数量。

---

- **示例 1：**

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-12-36-27.png)

```txt
输入：n = 4
输出：2
解释：如上图所示，4 皇后问题存在两个不同的解法。
```

- **示例 2：**

```txt
输入：n = 1
输出：1
```

---

**提示：**

- `1 <= n <= 9`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
