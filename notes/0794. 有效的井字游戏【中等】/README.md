# [0794. 有效的井字游戏【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0794.%20%E6%9C%89%E6%95%88%E7%9A%84%E4%BA%95%E5%AD%97%E6%B8%B8%E6%88%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/valid-tic-tac-toe-state/)

给你一个字符串数组 `board` 表示井字游戏的棋盘。当且仅当在井字游戏过程中，棋盘有可能达到 `board` 所显示的状态时，才返回 `true` 。

井字游戏的棋盘是一个 `3 x 3` 数组，由字符 `' '`，`'X'` 和 `'O'` 组成。字符 `' '` 代表一个空位。

以下是井字游戏的规则：

- 玩家轮流将字符放入空位（`' '`）中。
- 玩家 1 总是放字符 `'X'` ，而玩家 2 总是放字符 `'O'` 。
- `'X'` 和 `'O'` 只允许放置在空位中，不允许对已放有字符的位置进行填充。
- 当有 3 个相同（且非空）的字符填充任何行、列或对角线时，游戏结束。
- 当所有位置非空时，也算为游戏结束。
- 如果游戏结束，玩家不允许再放置字符。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-50-50.png)

```txt
输入：board = ["O  ","   ","   "]
输出：false
解释：玩家 1 总是放字符 "X" 。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-50-55.png)

```txt
输入：board = ["XOX"," X ","   "]
输出：false
解释：玩家应该轮流放字符。
```

- 示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-15-20-50-59.png)

```txt
输入：board = ["XOX","O O","XOX"]
输出：true
```

---

提示：

- `board.length == 3`
- `board[i].length == 3`
- `board[i][j]` 为 `'X'`、`'O'` 或 `' '`

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
