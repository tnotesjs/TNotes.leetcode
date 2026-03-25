# [1559. 二维网格图中探测环【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1559.%20%E4%BA%8C%E7%BB%B4%E7%BD%91%E6%A0%BC%E5%9B%BE%E4%B8%AD%E6%8E%A2%E6%B5%8B%E7%8E%AF%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/detect-cycles-in-2d-grid/)

给你一个二维字符网格数组 `grid`，大小为 `m x n`，你需要检查 `grid` 中是否存在 相同值 形成的环。

一个环是一条开始和结束于同一个格子的长度 大于等于 4 的路径。对于一个给定的格子，你可以移动到它上、下、左、右四个方向相邻的格子之一，可以移动的前提是这两个格子有 相同的值。

同时，你也不能回到上一次移动时所在的格子。比方说，环 `(1, 1) -> (1, 2) -> (1, 1)` 是不合法的，因为从 `(1, 2)` 移动到 `(1, 1)` 回到了上一次移动时的格子。

如果 `grid` 中有相同值形成的环，请你返回 `true`，否则返回 `false`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-58-37.png)

```txt
输入：grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]
输出：true
解释：如下图所示，有 2 个用不同颜色标出来的环：
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-58-41.png)

示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-58-47.png)

```txt
输入：grid = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]
输出：true
解释：如下图所示，只有高亮所示的一个合法环：
```

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-58-53.png)

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-14-58-59.png)

```txt
输入：grid = [["a","b","b"],["b","z","b"],["b","b","a"]]
输出：false
```

---

提示：

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m <= 500`
- `1 <= n <= 500`
- `grid` 只包含小写英文字母。

## 2. 🎯 s.1 - 并查集

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n \times \alpha(m \times n))$，其中 $\alpha$ 是反阿克曼函数
- 空间复杂度：$O(m \times n)$，并查集的空间

算法思路：

- 遍历每个格子，尝试与右方和下方的同字符格子合并
- 若两个同字符格子已经在同一个连通分量中（根相同），说明存在环
- 使用路径压缩和按秩合并优化并查集
