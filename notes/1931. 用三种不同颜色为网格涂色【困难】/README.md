# [1931. 用三种不同颜色为网格涂色【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1931.%20%E7%94%A8%E4%B8%89%E7%A7%8D%E4%B8%8D%E5%90%8C%E9%A2%9C%E8%89%B2%E4%B8%BA%E7%BD%91%E6%A0%BC%E6%B6%82%E8%89%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/painting-a-grid-with-three-different-colors/)

给你两个整数 `m` 和 `n` 。构造一个 `m x n` 的网格，其中每个单元格最开始是白色。请你用 红、绿、蓝 三种颜色为每个单元格涂色。所有单元格都需要被涂色。

涂色方案需要满足：不存在相邻两个单元格颜色相同的情况 。返回网格涂色的方法数。因为答案可能非常大， 返回 对 `10^9 + 7` 取余 的结果。

---

- 示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-13-31.png)

```txt
输入：m = 1, n = 1
输出：3
解释：如上图所示，存在三种可能的涂色方案。
```

- 示例 2：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-26-21-13-39.png)

```txt
输入：m = 1, n = 2
输出：6
解释：如上图所示，存在六种可能的涂色方案。
```

- 示例 3：

```txt
输入：m = 5, n = 5
输出：580986
```

---

提示：

- `1 <= m <= 5`
- `1 <= n <= 1000`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
