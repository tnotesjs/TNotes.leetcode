# [0059. 螺旋矩阵 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0059.%20%E8%9E%BA%E6%97%8B%E7%9F%A9%E9%98%B5%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 模拟（边界收缩）](#2--s1---模拟边界收缩)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/spiral-matrix-ii)

给你一个正整数 `n`，生成一个包含 `1` 到 `n^2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵 `matrix`。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-10-17-26-55.png)

```txt
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```

示例 2：

```txt
输入：n = 1
输出：[[1]]
```

---

提示：

- `1 <= n <= 20`

## 2. 🎯 s.1 - 模拟（边界收缩）

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，填充 $n \times n$ 个元素，每个恰好写入一次
- 空间复杂度：$O(1)$，不计输出矩阵，只使用常数额外空间

算法思路：

- 与 0054 螺旋矩阵相同的边界收缩思路，区别在于从"读取"变为"写入"
- 维护四个边界 `top, bottom, left, right`，按 右→下→左→上 的顺序填入递增数字
- 每填完一条边，收缩对应边界，向左和向上填充前需判断边界合法性
