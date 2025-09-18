# [0570. 至少有 5 名直接下属的经理【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0570.%20%E8%87%B3%E5%B0%91%E6%9C%895%E5%90%8D%E7%9B%B4%E6%8E%A5%E4%B8%8B%E5%B1%9E%E7%9A%84%E7%BB%8F%E7%90%86%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/managers-with-at-least-5-direct-reports/)

表: `Employee`

```txt
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| department  | varchar |
| managerId   | int     |
+-------------+---------+
id 是此表的主键（具有唯一值的列）。
该表的每一行表示雇员的名字、他们的部门和他们的经理的id。
如果managerId为空，则该员工没有经理。
没有员工会成为自己的管理者。
```

编写一个解决方案，找出至少有**五个直接下属**的经理。

以 **任意顺序** 返回结果表。

查询结果格式如下所示。

---

- **示例 1:**

```txt
输入:
Employee 表:
+-----+-------+------------+-----------+
| id  | name  | department | managerId |
+-----+-------+------------+-----------+
| 101 | John  | A          | Null      |
| 102 | Dan   | A          | 101       |
| 103 | James | A          | 101       |
| 104 | Amy   | A          | 101       |
| 105 | Anne  | A          | 101       |
| 106 | Ron   | B          | 101       |
+-----+-------+------------+-----------+
输出:
+------+
| name |
+------+
| John |
+------+
```

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
