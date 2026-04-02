# [0207. 课程表【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0207.%20%E8%AF%BE%E7%A8%8B%E8%A1%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - BFS 拓扑排序](#2--s1---bfs-拓扑排序)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/course-schedule/)

你这个学期必须选修 `numCourses` 门课程，记为 `0` 到 `numCourses - 1`。

在选修某些课程之前需要一些先修课程。 先修课程按数组 `prerequisites` 给出，其中 `prerequisites[i] = [ai, bi]`，表示如果要学习课程 `ai` 则 必须 先学习课程 `bi`。

- 例如，先修课程对 `[0, 1]` 表示：想要学习课程 `0`，你需要先完成课程 `1`。

请你判断是否可能完成所有课程的学习？如果可以，返回 `true` ；否则，返回 `false`。

---

示例 1：

```txt
输入：numCourses = 2, prerequisites = [[1,0]]
输出：true

解释：
总共有 2 门课程。学习课程 1 之前，你需要完成课程 0。这是可能的。
```

示例 2：

```txt
输入：numCourses = 2, prerequisites = [[1,0],[0,1]]
输出：false

解释：
总共有 2 门课程。学习课程 1 之前，你需要先完成​课程 0 ；并且学习课程 0 之前，你还应先完成课程 1。这是不可能的。
```

---

提示：

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses`
- `prerequisites[i]` 中的所有课程对 互不相同

## 2. 🎯 s.1 - BFS 拓扑排序

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(V + E)$，其中 $V$ 是课程数，$E$ 是先修关系数
- 空间复杂度：$O(V + E)$，邻接表和入度数组

算法思路：

- 建立邻接表和入度数组，将入度为 0 的节点加入队列
- BFS 遍历，每次取出节点后将其邻居入度减 1，入度为 0 的加入队列
- 若最终处理的节点数等于课程总数，则无环
