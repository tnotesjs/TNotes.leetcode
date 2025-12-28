# [1036. 逃离大迷宫【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1036.%20%E9%80%83%E7%A6%BB%E5%A4%A7%E8%BF%B7%E5%AE%AB%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/escape-a-large-maze/)

在一个 10^6 x 10^6 的网格中，每个网格上方格的坐标为 `(x, y)`。

现在从源方格 `source = [sx, sy]` 开始出发，意图赶往目标方格 `target = [tx, ty]`。数组 `blocked` 是封锁的方格列表，其中每个 `blocked[i] = [xi, yi]` 表示坐标为 `(xi, yi)` 的方格是禁止通行的。

每次移动，都可以走到网格中在四个方向上相邻的方格，只要该方格 不 在给出的封锁列表 `blocked` 上。同时，不允许走出网格。

只有在可以通过一系列的移动从源方格 `source` 到达目标方格 `target` 时才返回 `true`。否则，返回 `false`。

---

- 示例 1：

```txt
输入：blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
输出：false
解释：
从源方格无法到达目标方格，因为我们无法在网格中移动。
无法向北或者向东移动是因为方格禁止通行。
无法向南或者向西移动是因为不能走出网格。
```

- 示例 2：

```txt
输入：blocked = [], source = [0,0], target = [999999,999999]
输出：true
解释：
因为没有方格被封锁，所以一定可以到达目标方格。
```

---

提示：

- `0 <= blocked.length <= 200`
- `blocked[i].length == 2`
- `0 <= xi, yi < 10^6`
- `source.length == target.length == 2`
- `0 <= sx, sy, tx, ty < 10^6`
- `source != target`
- 题目数据保证 `source` 和 `target` 不在封锁列表内

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
