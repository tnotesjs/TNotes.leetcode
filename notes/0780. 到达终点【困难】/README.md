# [0780. 到达终点【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0780.%20%E5%88%B0%E8%BE%BE%E7%BB%88%E7%82%B9%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reaching-points/)

给定四个整数 `sx` , `sy` ，`tx` 和 `ty`，如果通过一系列的**转换**可以从起点 `(sx, sy)` 到达终点 `(tx, ty)`，则返回 `true`，否则返回 `false`。

从点 `(x, y)` 可以**转换**到 `(x, x+y)` 或者 `(x+y, y)`。

---

- **示例 1:**

```txt
输入: sx = 1, sy = 1, tx = 3, ty = 5
输出: true
解释:
可以通过以下一系列转换从起点转换到终点：
(1, 1) -> (1, 2)
(1, 2) -> (3, 2)
(3, 2) -> (3, 5)
```

- **示例 2:**

```txt
输入: sx = 1, sy = 1, tx = 2, ty = 2
输出: false
```

- **示例 3:**

```txt
输入: sx = 1, sy = 1, tx = 1, ty = 1
输出: true
```

---

**提示:**

- `1 <= sx, sy, tx, ty <= 10^9`

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
