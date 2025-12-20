# [2849. 判断能否在给定时间到达单元格【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2849.%20%E5%88%A4%E6%96%AD%E8%83%BD%E5%90%A6%E5%9C%A8%E7%BB%99%E5%AE%9A%E6%97%B6%E9%97%B4%E5%88%B0%E8%BE%BE%E5%8D%95%E5%85%83%E6%A0%BC%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/determine-if-a-cell-is-reachable-at-a-given-time/)

给你四个整数 `sx`、`sy`、`fx`、`fy` 以及一个 非负整数 `t` 。

在一个无限的二维网格中，你从单元格 `(sx, sy)` 开始出发。每一秒，你 必须 移动到任一与之前所处单元格相邻的单元格中。

如果你能在 恰好 `t` 秒 后到达单元格 `(fx, fy)` ，返回 `true` ；否则，返回 `false` 。

单元格的 相邻单元格 是指该单元格周围与其至少共享一个角的 8 个单元格。你可以多次访问同一个单元格。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-12-21-14.png)

```txt
输入：sx = 2, sy = 4, fx = 7, fy = 7, t = 6
输出：true
解释：从单元格 (2, 4) 开始出发，穿过上图标注的单元格，可以在恰好 6 秒后到达单元格 (7, 7) 。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-28-12-21-20.png)

```txt
输入：sx = 3, sy = 1, fx = 7, fy = 3, t = 3
输出：false
解释：从单元格 (3, 1) 开始出发，穿过上图标注的单元格，至少需要 4 秒后到达单元格 (7, 3) 。 因此，无法在 3 秒后到达单元格 (7, 3) 。
```

---

提示：

- `1 <= sx, sy, fx, fy <= 10^9`
- `0 <= t <= 10^9`

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
