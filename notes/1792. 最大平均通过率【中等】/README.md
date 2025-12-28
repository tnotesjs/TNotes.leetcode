# [1792. 最大平均通过率【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1792.%20%E6%9C%80%E5%A4%A7%E5%B9%B3%E5%9D%87%E9%80%9A%E8%BF%87%E7%8E%87%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-average-pass-ratio/)

一所学校里有一些班级，每个班级里有一些学生，现在每个班都会进行一场期末考试。给你一个二维数组 `classes` ，其中 `classes[i] = [passi, totali]` ，表示你提前知道了第 `i` 个班级总共有 `totali` 个学生，其中只有 `passi` 个学生可以通过考试。

给你一个整数 `extraStudents` ，表示额外有 `extraStudents` 个聪明的学生，他们 一定 能通过任何班级的期末考。你需要给这 `extraStudents` 个学生每人都安排一个班级，使得 所有 班级的 平均 通过率 最大。

一个班级的 通过率 等于这个班级通过考试的学生人数除以这个班级的总人数。平均通过率 是所有班级的通过率之和除以班级数目。

请你返回在安排这 `extraStudents` 个学生去对应班级后的 最大 平均通过率。与标准答案误差范围在 `10^-5` 以内的结果都会视为正确结果。

---

- 示例 1：

```txt
输入：classes = [[1,2],[3,5],[2,2]], extraStudents = 2
输出：0.78333
解释：你可以将额外的两个学生都安排到第一个班级，平均通过率为 (3/4 + 3/5 + 2/2) / 3 = 0.78333。
```

- 示例 2：

```txt
输入：classes = [[2,4],[3,9],[4,5],[2,10]], extraStudents = 4
输出：0.53485
```

---

提示：

- `1 <= classes.length <= 10^5`
- `classes[i].length == 2`
- `1 <= passi <= totali <= 10^5`
- `1 <= extraStudents <= 10^5`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
