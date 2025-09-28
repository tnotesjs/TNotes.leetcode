# [2543. 判断一个点是否可以到达【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2543.%20%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E7%82%B9%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E5%88%B0%E8%BE%BE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-point-is-reachable/)

给你一个无穷大的网格图。一开始你在 `(1, 1)` ，你需要通过有限步移动到达点 `(targetX, targetY)` 。

**每一步** ，你可以从点 `(x, y)` 移动到以下点之一：

- `(x, y - x)`
- `(x - y, y)`
- `(2 * x, y)`
- `(x, 2 * y)`

给你两个整数 `targetX` 和 `targetY` ，分别表示你最后需要到达点的 X 和 Y 坐标。如果你可以从 `(1, 1)` 出发到达这个点，请你返回`true` ，否则返回 `false` 。

---

- **示例 1：**

```txt
输入：targetX = 6, targetY = 9
输出：false
解释：没法从 (1,1) 出发到达 (6,9) ，所以返回 false 。
```

---

- **示例 2：**

```txt
输入：targetX = 4, targetY = 7
输出：true
解释：你可以按照以下路径到达：(1,1) -> (1,2) -> (1,4) -> (1,8) -> (1,7) -> (2,7) -> (4,7) 。
```

---

**提示：**

- `1 <= targetX, targetY <= 10^9`

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
