# [3493. 属性图【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3493.%20%E5%B1%9E%E6%80%A7%E5%9B%BE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/properties-graph/)

给你一个二维整数数组 `properties`，其维度为 `n x m`，以及一个整数 `k`。

定义一个函数 `intersect(a, b)`，它返回数组 `a` 和 `b` 中 **共有的不同整数的数量** 。

构造一个 **无向图**，其中每个索引 `i` 对应 `properties[i]`。如果且仅当 `intersect(properties[i], properties[j]) >= k`（其中 `i` 和 `j` 的范围为 `[0, n - 1]` 且 `i != j`），节点 `i` 和节点 `j` 之间有一条边。

返回结果图中 **连通分量** 的数量。

---

- **示例 1：**

**输入：** properties = [[1,2],[1,1],[3,4],[4,5],[5,6],[7,7]], k = 1

**输出：** 3

**解释：**

生成的图有 3 个连通分量：

![图 0](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-39-52.png)

---

- **示例 2：**

**输入：** properties = [[1,2,3],[2,3,4],[4,3,5]], k = 2

**输出：** 1

**解释：**

生成的图有 1 个连通分量：

![图 1](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-29-22-40-04.png)

---

- **示例 3：**

**输入：** properties = [[1,1],[1,1]], k = 2

**输出：** 2

**解释：**

`intersect(properties[0], properties[1]) = 1`，小于 `k`。因此在图中 `properties[0]` 和 `properties[1]` 之间没有边。

---

**提示：**

- `1 <= n == properties.length <= 100`
- `1 <= m == properties[i].length <= 100`
- `1 <= properties[i][j] <= 100`
- `1 <= k <= m`

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
