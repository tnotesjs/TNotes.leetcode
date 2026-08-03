# [0182. 查找重复的电子邮箱【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0182.%20%E6%9F%A5%E6%89%BE%E9%87%8D%E5%A4%8D%E7%9A%84%E7%94%B5%E5%AD%90%E9%82%AE%E7%AE%B1%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 暴力解法](#2-s1---暴力解法)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/duplicate-emails/)

表: `Person`

```txt
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| email       | varchar |
+-------------+---------+
id 是该表的主键（具有唯一值的列）。
此表的每一行都包含一封电子邮件。电子邮件不包含大写字母。
```

编写解决方案来报告所有重复的电子邮件。 请注意，可以保证电子邮件字段不为 NULL。

以 任意顺序 返回结果表。

结果格式如下例。

示例 1：

```txt
输入:
Person 表:
+----+---------+
| id | email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
输出:
+---------+
| Email   |
+---------+
| a@b.com |
+---------+
解释: a@b.com 出现了两次。
```

## 2. s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
