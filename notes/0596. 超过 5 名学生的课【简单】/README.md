# [0596. 超过 5 名学生的课【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0596.%20%E8%B6%85%E8%BF%87%205%20%E5%90%8D%E5%AD%A6%E7%94%9F%E7%9A%84%E8%AF%BE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/classes-with-at-least-5-students/)

表: `Courses`

```txt
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| student     | varchar |
| class       | varchar |
+-------------+---------+
(student, class)是该表的主键（不同值的列的组合）。
该表的每一行表示学生的名字和他们注册的班级。
```

查询  **至少有 5 个学生** 的所有班级。

以 **任意顺序** 返回结果表。

结果格式如下所示。

---

- **示例 1:**

```txt
输入:
Courses table:
+---------+----------+
| student | class    |
+---------+----------+
| A       | Math     |
| B       | English  |
| C       | Math     |
| D       | Biology  |
| E       | Math     |
| F       | Computer |
| G       | Math     |
| H       | Math     |
| I       | Math     |
+---------+----------+
输出:
+---------+
| class   |
+---------+
| Math    |
+---------+
解释:
-数学课有 6 个学生，所以我们包括它。
-英语课有 1 名学生，所以我们不包括它。
-生物课有 1 名学生，所以我们不包括它。
-计算机课有 1 个学生，所以我们不包括它。
```

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
