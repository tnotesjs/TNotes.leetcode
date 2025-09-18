# [0584. 寻找用户推荐人【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0584.%20%E5%AF%BB%E6%89%BE%E7%94%A8%E6%88%B7%E6%8E%A8%E8%8D%90%E4%BA%BA%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-customer-referee/)

表: `Customer`

```txt
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| id          | int     |
| name        | varchar |
| referee_id  | int     |
+-------------+---------+
在 SQL 中，id 是该表的主键列。
该表的每一行表示一个客户的 id、姓名以及推荐他们的客户的 id。
```

找出以下客户的姓名：

1. **被任何** `id != 2` 的用户推荐。
2. **没有被** 任何用户推荐。

以 **任意顺序** 返回结果表。

结果格式如下所示。

---

- **示例 1：**

```txt
输入：
Customer 表:
+----+------+------------+
| id | name | referee_id |
+----+------+------------+
| 1  | Will | null       |
| 2  | Jane | null       |
| 3  | Alex | 2          |
| 4  | Bill | null       |
| 5  | Zack | 1          |
| 6  | Mark | 2          |
+----+------+------------+
输出：
+------+
| name |
+------+
| Will |
| Jane |
| Bill |
| Zack |
+------+
```

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
