# [2672. 有相同颜色的相邻元素数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2672.%20%E6%9C%89%E7%9B%B8%E5%90%8C%E9%A2%9C%E8%89%B2%E7%9A%84%E7%9B%B8%E9%82%BB%E5%85%83%E7%B4%A0%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-adjacent-elements-with-the-same-color/)

给定一个整数 `n` 表示一个长度为 `n` 的数组 `colors`，初始所有元素均为 0 ，表示是 **未染色** 的。同时给定一个二维整数数组 `queries`，其中 `queries[i] = [indexi, colori]`。对于第 `i` 个 **查询**：

- 将 `colors[indexi]` 染色为 `colori`。
- 统计 `colors` 中颜色相同的相邻对的数量（无论 `colori`）。

请你返回一个长度与 `queries` 相等的数组 `answer` ，其中 `answer[i]`是前 `i` 个操作的答案。

---

- **示例 1：**

```txt
输入：n = 4, queries = [[0,2],[1,2],[3,1],[1,1],[2,1]]
输出：[0,1,1,0,2]

解释：
- 一开始 colors = [0,0,0,0]，其中 0 表示数组中未染色的元素。
- 在第 1 次查询后 colors = [2,0,0,0]。颜色相同的相邻对的数量是 0。
- 在第 2 次查询后 colors = [2,2,0,0]。颜色相同的相邻对的数量是 1。
- 在第 3 次查询后 colors = [2,2,0,1]。颜色相同的相邻对的数量是 1。
- 在第 4 次查询后 colors = [2,1,0,1]。颜色相同的相邻对的数量是 0。
- 在第 5 次查询后 colors = [2,1,1,1]。颜色相同的相邻对的数量是 2。
```

- **示例 2：**

```txt
输入：n = 1, queries = [[0,100000]]
输出：[0]

解释：
在第一次查询后 colors = [100000]。颜色相同的相邻对的数量是 0。
```

---

**提示：**

- `1 <= n <= 10^5`
- `1 <= queries.length <= 10^5`
- `queries[i].length == 2`
- `0 <= indexi <= n - 1`
- `1 <= colori <= 10^5`

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
