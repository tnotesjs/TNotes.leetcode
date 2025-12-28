# [2132. 用邮票贴满网格图【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2132.%20%E7%94%A8%E9%82%AE%E7%A5%A8%E8%B4%B4%E6%BB%A1%E7%BD%91%E6%A0%BC%E5%9B%BE%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/stamping-the-grid/)

给你一个 `m x n` 的二进制矩阵 `grid` ，每个格子要么为 `0` （空）要么为 `1` （被占据）。

给你邮票的尺寸为 `stampHeight x stampWidth`。我们想将邮票贴进二进制矩阵中，且满足以下 限制 和 要求 ：

1. 覆盖所有 空 格子。
2. 不覆盖任何 被占据 的格子。
3. 我们可以放入任意数目的邮票。
4. 邮票可以相互有 重叠 部分。
5. 邮票不允许 旋转。
6. 邮票必须完全在矩阵 内。

如果在满足上述要求的前提下，可以放入邮票，请返回 `true` ，否则返回 `false`。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-40-40.png)

```txt
输入：grid = [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]], stampHeight = 4, stampWidth = 3
输出：true
解释：我们放入两个有重叠部分的邮票（图中标号为 1 和 2），它们能覆盖所有与空格子。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-23-40-48.png)

```txt
输入：grid = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]], stampHeight = 2, stampWidth = 2
输出：false
解释：没办法放入邮票覆盖所有的空格子，且邮票不超出网格图以外。
```

---

提示：

- `m == grid.length`
- `n == grid[r].length`
- `1 <= m, n <= 10^5`
- `1 <= m * n <= 2 * 10^5`
- `grid[r][c]` 要么是 `0` ，要么是 `1`。
- `1 <= stampHeight, stampWidth <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
