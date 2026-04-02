# [2857. 统计距离为 k 的点对【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2857.%20%E7%BB%9F%E8%AE%A1%E8%B7%9D%E7%A6%BB%E4%B8%BA%20k%20%E7%9A%84%E7%82%B9%E5%AF%B9%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希表 + 枚举异或拆分](#2--s1---哈希表--枚举异或拆分)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-pairs-of-points-with-distance-k/)

给你一个 二维 整数数组 `coordinates` 和一个整数 `k`，其中 `coordinates[i] = [xi, yi]` 是第 `i` 个点在二维平面里的坐标。

我们定义两个点 `(x1, y1)` 和 `(x2, y2)` 的 距离 为 `(x1 XOR x2) + (y1 XOR y2)`，`XOR` 指的是按位异或运算。

请你返回满足 `i < j` 且点 `i` 和点 `j`之间距离为 `k` 的点对数目。

---

示例 1：

```txt
输入：coordinates = [[1,2],[4,2],[1,3],[5,2]], k = 5
输出：2
解释：以下点对距离为 k ：
- (0, 1)：(1 XOR 4) + (2 XOR 2) = 5。
- (2, 3)：(1 XOR 5) + (3 XOR 2) = 5。
```

示例 2：

```txt
输入：coordinates = [[1,3],[1,3],[1,3],[1,3],[1,3]], k = 0
输出：10
解释：任何两个点之间的距离都为 0，所以总共有 10 组点对。
```

---

提示：

- `2 <= coordinates.length <= 50000`
- `0 <= xi, yi <= 10^6`
- `0 <= k <= 100`

## 2. 🎯 s.1 - 哈希表 + 枚举异或拆分

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(N \cdot K)$，其中 N 是点的数量，K 是目标距离
- 空间复杂度：$O(N)$，哈希表存储已遍历的点

算法思路：

- 距离 (x1 XOR x2) + (y1 XOR y2) = k，枚举 a 从 0 到 k，令 b = k - a
- 对每个点 (x, y)，在哈希表中查找 (x XOR a, y XOR b) 的计数
- 遍历后将当前点加入哈希表，避免重复计数
