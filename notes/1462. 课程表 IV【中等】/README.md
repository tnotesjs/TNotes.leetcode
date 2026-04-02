# [1462. 课程表 IV【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1462.%20%E8%AF%BE%E7%A8%8B%E8%A1%A8%20IV%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - Floyd-Warshall 传递闭包](#2--s1---floyd-warshall-传递闭包)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/course-schedule-iv/)

你总共需要上 `numCourses` 门课，课程编号依次为 `0` 到 `numCourses-1`。你会得到一个数组 `prerequisite`，其中 `prerequisites[i] = [ai, bi]` 表示如果你想选 `bi` 课程，你 必须 先选 `ai` 课程。

- 有的课会有直接的先修课程，比如如果想上课程 `1`，你必须先上课程 `0`，那么会以 `[0,1]` 数对的形式给出先修课程数对。

先决条件也可以是 间接 的。如果课程 `a` 是课程 `b` 的先决条件，课程 `b` 是课程 `c` 的先决条件，那么课程 `a` 就是课程 `c` 的先决条件。

你也得到一个数组 `queries`，其中 `queries[j] = [uj, vj]`。对于第 `j` 个查询，您应该回答课程 `uj` 是否是课程 `vj` 的先决条件。

返回一个布尔数组 `answer`，其中 `answer[j]` 是第 `j` 个查询的答案。

---

示例 1：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-08-28.png)

```txt
输入：numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]
输出：[false,true]
解释：[1, 0] 数对表示在你上课程 0 之前必须先上课程 1。
课程 0 不是课程 1 的先修课程，但课程 1 是课程 0 的先修课程。
```

示例 2：

```txt
输入：numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]]
输出：[false,false]
解释：没有先修课程对，所以每门课程之间是独立的。
```

示例 3：

![img](https://cdn.jsdelivr.net/gh/tnotesjs/imgs@main/2025-09-22-00-08-37.png)

```txt
输入：numCourses = 3, prerequisites = [[1,2],[1,0],[2,0]], queries = [[1,0],[1,2]]
输出：[true,true]
```

---

提示：

- `2 <= numCourses <= 100`
- `0 <= prerequisites.length <= (numCourses * (numCourses - 1) / 2)`
- `prerequisites[i].length == 2`
- `0 <= ai, bi <= numCourses - 1`
- `ai != bi`
- 每一对 `[ai, bi]` 都 不同
- 先修课程图中没有环。
- `1 <= queries.length <= 10^4`
- `0 <= ui, vi <= numCourses - 1`
- `ui != vi`

## 2. 🎯 s.1 - Floyd-Warshall 传递闭包

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^3)$，其中 n 是课程数量
- 空间复杂度：$O(n^2)$，存储可达矩阵

算法思路：

- 构建可达矩阵 `reach[i][j]` 表示课程 i 是否为课程 j 的先修课
- 用 Floyd-Warshall 传递闭包算法：若 i 可达 k 且 k 可达 j，则 i 可达 j
- 对每个查询直接查表返回结果
