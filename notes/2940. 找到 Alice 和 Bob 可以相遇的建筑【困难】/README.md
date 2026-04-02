# [2940. 找到 Alice 和 Bob 可以相遇的建筑【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2940.%20%E6%89%BE%E5%88%B0%20Alice%20%E5%92%8C%20Bob%20%E5%8F%AF%E4%BB%A5%E7%9B%B8%E9%81%87%E7%9A%84%E5%BB%BA%E7%AD%91%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 离线查询 + 单调栈](#2--s1---离线查询--单调栈)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-building-where-alice-and-bob-can-meet/)

给你一个下标从 0 开始的正整数数组 `heights`，其中 `heights[i]` 表示第 `i` 栋建筑的高度。

如果一个人在建筑 `i`，且存在 `i < j` 的建筑 `j` 满足 `heights[i] < heights[j]`，那么这个人可以移动到建筑 `j`。

给你另外一个数组 `queries`，其中 `queries[i] = [ai, bi]`。第 `i` 个查询中，Alice 在建筑 `ai`，Bob 在建筑 `bi`。

请你能返回一个数组 `ans`，其中 `ans[i]` 是第 `i` 个查询中，Alice 和 Bob 可以相遇的 最左边的建筑。如果对于查询 `i`，Alice 和 Bob 不能相遇，令 `ans[i]` 为 `-1`。

---

示例 1：

```txt
输入：heights = [6,4,8,5,2,7], queries = [[0,1],[0,3],[2,4],[3,4],[2,2]]
输出：[2,5,-1,5,2]

解释：
第一个查询中，Alice 和 Bob 可以移动到建筑 2，因为 heights[0] < heights[2] 且 heights[1] < heights[2]。
第二个查询中，Alice 和 Bob 可以移动到建筑 5，因为 heights[0] < heights[5] 且 heights[3] < heights[5]。
第三个查询中，Alice 无法与 Bob 相遇，因为 Alice 不能移动到任何其他建筑。
第四个查询中，Alice 和 Bob 可以移动到建筑 5，因为 heights[3] < heights[5] 且 heights[4] < heights[5]。
第五个查询中，Alice 和 Bob 已经在同一栋建筑中。
对于 ans[i] != -1，ans[i] 是 Alice 和 Bob 可以相遇的建筑中最左边建筑的下标。
对于 ans[i] == -1，不存在 Alice 和 Bob 可以相遇的建筑。
```

示例 2：

```txt
输入：heights = [5,3,8,2,6,1,4,6], queries = [[0,7],[3,5],[5,2],[3,0],[1,6]]
输出：[7,6,-1,4,6]

解释：
第一个查询中，Alice 可以直接移动到 Bob 的建筑，因为 heights[0] < heights[7]。
第二个查询中，Alice 和 Bob 可以移动到建筑 6，因为 heights[3] < heights[6] 且 heights[5] < heights[6]。
第三个查询中，Alice 无法与 Bob 相遇，因为 Bob 不能移动到任何其他建筑。
第四个查询中，Alice 和 Bob 可以移动到建筑 4，因为 heights[3] < heights[4] 且 heights[0] < heights[4]。
第五个查询中，Alice 可以直接移动到 Bob 的建筑，因为 heights[1] < heights[6]。
对于 ans[i] != -1，ans[i] 是 Alice 和 Bob 可以相遇的建筑中最左边建筑的下标。
对于 ans[i] == -1，不存在 Alice 和 Bob 可以相遇的建筑。
```

---

提示：

- `1 <= heights.length <= 5 * 10^4`
- `1 <= heights[i] <= 10^9`
- `1 <= queries.length <= 5 * 10^4`
- `queries[i] = [ai, bi]`
- `0 <= ai, bi <= heights.length - 1`

## 2. 🎯 s.1 - 离线查询 + 单调栈

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O((N + Q) \log N)$，其中 N 是 heights 的长度，Q 是 queries 的长度
- 空间复杂度：$O(N + Q)$，单调栈和待处理列表的空间

算法思路：

- 对每个查询 `[a, b]`（确保 `a ≤ b`），若 `a == b` 或 `heights[a] < heights[b]`，直接返回 b
- 否则，将查询挂到下标 b 上，等待后续在更高建筑处处理
- 从右到左维护一个高度递减的单调栈，对于每个挂在当前下标上的查询，在栈中二分查找第一个高度严格大于 `heights[a]` 的建筑
