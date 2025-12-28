# [0196. 删除重复的电子邮箱【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0196.%20%E5%88%A0%E9%99%A4%E9%87%8D%E5%A4%8D%E7%9A%84%E7%94%B5%E5%AD%90%E9%82%AE%E7%AE%B1%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/delete-duplicate-emails/)

表:`Person`

```txt
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id 是该表的主键列(具有唯一值的列)。
该表的每一行包含一封电子邮件。电子邮件将不包含大写字母。
```

编写解决方案 删除 所有重复的电子邮件，只保留一个具有最小 `id` 的唯一电子邮件。

（对于 SQL 用户，请注意你应该编写一个 `DELETE` 语句而不是 `SELECT` 语句。）

（对于 Pandas 用户，请注意你应该直接修改 `Person` 表。）

运行脚本后，显示的答案是 `Person` 表。驱动程序将首先编译并运行您的代码片段，然后再显示 `Person` 表。`Person` 表的最终顺序 无关紧要。

返回结果格式如下示例所示。

---

- 示例 1：

```txt
输入:
Person 表:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
| 3  | john@example.com |
+----+------------------+
输出:
+----+------------------+
| id | email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
解释: john@example.com重复两次。我们保留最小的Id = 1。
```

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
