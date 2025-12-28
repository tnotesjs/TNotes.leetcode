# [1222. 可以攻击国王的皇后【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1222.%20%E5%8F%AF%E4%BB%A5%E6%94%BB%E5%87%BB%E5%9B%BD%E7%8E%8B%E7%9A%84%E7%9A%87%E5%90%8E%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/queens-that-can-attack-the-king/)

在一个 下标从 0 开始 的 `8 x 8` 棋盘上，可能有多个黑皇后和一个白国王。

给你一个二维整数数组 `queens`，其中 `queens[i] = [xQueeni, yQueeni]` 表示第 `i` 个黑皇后在棋盘上的位置。还给你一个长度为 `2` 的整数数组 `king`，其中 `king = [xKing, yKing]` 表示白国王的位置。

返回 _能够直接攻击国王的黑皇后的坐标_。你可以以 任何顺序 返回答案。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-19-45-32.png)

```txt
输入：queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
输出：[[0,1],[1,0],[3,3]]
解释：上面的图示显示了三个可以直接攻击国王的皇后和三个不能攻击国王的皇后（用红色虚线标记）。
```

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-17-19-45-38.png)

```txt
输入：queens = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], king = [3,3]
输出：[[2,2],[3,4],[4,4]]
解释：上面的图示显示了三个能够直接攻击国王的黑皇后和三个不能攻击国王的黑皇后（用红色虚线标记）。
```

---

提示：

- `1 <= queens.length < 64`
- `queens[i].length == king.length == 2`
- `0 <= xQueeni, yQueeni, xKing, yKing < 8`
- 所有给定的位置都是 唯一 的。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
