# [1075. 项目员工 I【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1075.%20%E9%A1%B9%E7%9B%AE%E5%91%98%E5%B7%A5%20I%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/project-employees-i/)

项目表  `Project`：

```txt
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| project_id  | int     |
| employee_id | int     |
+-------------+---------+
```

主键为 (project_id, employee_id)。 employee_id 是员工表 Employee 表的外键。这张表的每一行表示 employee_id 的员工正在 project_id 的项目上工作。

员工表  `Employee`：

```txt
+------------------+---------+
| Column Name      | Type    |
+------------------+---------+
| employee_id      | int     |
| name             | varchar |
| experience_years | int     |
+------------------+---------+
```

主键是 employee_id。数据保证 experience_years 非空。这张表的每一行包含一个员工的信息。

请写一个 SQL  语句，查询每一个项目中员工的  **平均**  工作年限，**精确到小数点后两位**。

以 **任意** 顺序返回结果表。

查询结果的格式如下。

---

- **示例 1:**

```txt
输入：
Project 表：
+-------------+-------------+
| project_id  | employee_id |
+-------------+-------------+
| 1           | 1           |
| 1           | 2           |
| 1           | 3           |
| 2           | 1           |
| 2           | 4           |
+-------------+-------------+

Employee 表：
+-------------+--------+------------------+
| employee_id | name   | experience_years |
+-------------+--------+------------------+
| 1           | Khaled | 3                |
| 2           | Ali    | 2                |
| 3           | John   | 1                |
| 4           | Doe    | 2                |
+-------------+--------+------------------+

输出：
+-------------+---------------+
| project_id  | average_years |
+-------------+---------------+
| 1           | 2.00          |
| 2           | 2.50          |
+-------------+---------------+
解释：第一个项目中，员工的平均工作年限是 (3 + 2 + 1) / 3 = 2.00；第二个项目中，员工的平均工作年限是 (3 + 2) / 2 = 2.50
```

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
