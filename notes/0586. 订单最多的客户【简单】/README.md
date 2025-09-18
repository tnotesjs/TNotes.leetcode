# [0586. 订单最多的客户【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0586.%20%E8%AE%A2%E5%8D%95%E6%9C%80%E5%A4%9A%E7%9A%84%E5%AE%A2%E6%88%B7%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/customer-placing-the-largest-number-of-orders/)

表: `Orders`

```txt
+-----------------+----------+
| Column Name     | Type     |
+-----------------+----------+
| order_number    | int      |
| customer_number | int      |
+-----------------+----------+
在 SQL 中，Order_number是该表的主键。
此表包含关于订单ID和客户ID的信息。
```

查找下了 **最多订单** 的客户的 `customer_number` 。

测试用例生成后， **恰好有一个客户** 比任何其他客户下了更多的订单。

查询结果格式如下所示。

---

- **示例 1:**

```txt
输入:
Orders 表:
+--------------+-----------------+
| order_number | customer_number |
+--------------+-----------------+
| 1            | 1               |
| 2            | 2               |
| 3            | 3               |
| 4            | 3               |
+--------------+-----------------+
输出:
+-----------------+
| customer_number |
+-----------------+
| 3               |
+-----------------+
解释:
customer_number 为 '3' 的顾客有两个订单，比顾客 '1' 或者 '2' 都要多，因为他们只有一个订单。
所以结果是该顾客的 customer_number ，也就是 3 。
```

**进阶：** 如果有多位顾客订单数并列最多，你能找到他们所有的 `customer_number` 吗？

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
