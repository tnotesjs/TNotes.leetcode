# [0210. 课程表 II【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0210.%20%E8%AF%BE%E7%A8%8B%E8%A1%A8%20II%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/course-schedule-ii/)

现在你总共有 `numCourses` 门课需要选，记为  `0`  到  `numCourses - 1`。给你一个数组  `prerequisites` ，其中 `prerequisites[i] = [ai, bi]` ，表示在选修课程 `ai` 前 **必须** 先选修  `bi` 。

- 例如，想要学习课程 `0` ，你需要先完成课程  `1` ，我们用一个匹配来表示：`[0,1]` 。

返回你为了学完所有课程所安排的学习顺序。可能会有多个正确的顺序，你只要返回 **任意一种** 就可以了。如果不可能完成所有课程，返回 **一个空数组** 。

---

- **示例 1：**

```txt
输入：numCourses = 2, prerequisites = [[1,0]]
输出：[0,1]

解释：
总共有 2 门课程。要学习课程 1，你需要先完成课程 0。
因此，正确的课程顺序为 [0,1] 。
```

- **示例 2：**

```txt
输入：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
输出：[0,2,1,3]

解释：
总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。
并且课程 1 和课程 2 都应该排在课程 0 之后。
因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。
```

- **示例 3：**

```txt
输入：numCourses = 1, prerequisites = []
输出：[0]
```

---

**提示：**

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= numCourses * (numCourses - 1)`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses`
- `ai != bi`
- 所有`[ai, bi]` **互不相同**

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

```

```
