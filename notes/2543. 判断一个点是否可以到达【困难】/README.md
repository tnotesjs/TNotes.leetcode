# [2543. 判断一个点是否可以到达【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2543.%20%E5%88%A4%E6%96%AD%E4%B8%80%E4%B8%AA%E7%82%B9%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E5%88%B0%E8%BE%BE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-point-is-reachable/)

给你一个无穷大的网格图。一开始你在 `(1, 1)`，你需要通过有限步移动到达点 `(targetX, targetY)`。

每一步，你可以从点 `(x, y)` 移动到以下点之一：

- `(x, y - x)`
- `(x - y, y)`
- `(2 * x, y)`
- `(x, 2 * y)`

给你两个整数 `targetX` 和 `targetY`，分别表示你最后需要到达点的 X 和 Y 坐标。如果你可以从 `(1, 1)` 出发到达这个点，请你返回`true`，否则返回 `false`。

---

示例 1：

```txt
输入：targetX = 6, targetY = 9
输出：false
解释：没法从 (1,1) 出发到达 (6,9)，所以返回 false。
```

---

示例 2：

```txt
输入：targetX = 4, targetY = 7
输出：true
解释：你可以按照以下路径到达：(1,1) -> (1,2) -> (1,4) -> (1,8) -> (1,7) -> (2,7) -> (4,7)。
```

---

提示：

- `1 <= targetX, targetY <= 10^9`

## 2. 🎯 s.1 - GCD

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log(\min(x, y)))$，GCD 计算的时间
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

算法思路：

- 操作 `(x, y-x)` 和 `(x-y, y)` 本质上是辗转相减（GCD 操作的逆过程）
- 操作 `(2x, y)` 和 `(x, 2y)` 可以任意乘以 2 的幂
- 从 `(1, 1)` 出发，能到达的点 `(x, y)` 等价于 `gcd(x, y)` 是 2 的幂
- 判断 `gcd(targetX, targetY)` 是否为 2 的幂：`g & (g - 1) === 0`
