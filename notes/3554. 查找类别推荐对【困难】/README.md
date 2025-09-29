# [3554. 查找类别推荐对【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3554.%20%E6%9F%A5%E6%89%BE%E7%B1%BB%E5%88%AB%E6%8E%A8%E8%8D%90%E5%AF%B9%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-category-recommendation-pairs/)

表：`ProductPurchases`

```txt
+-------------+------+
| Column Name | Type |
+-------------+------+
| user_id     | int  |
| product_id  | int  |
| quantity    | int  |
+-------------+------+
(user_id, product_id) 是这张表的唯一主键。
每一行代表用户以特定数量购买的一种产品。
```

表：`ProductInfo`

```txt
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| product_id  | int     |
| category    | varchar |
| price       | decimal |
+-------------+---------+
product_id 是这张表的唯一主键。
每一行表示一件商品的类别和价格。
```

亚马逊想要了解不同产品类别的购物模式。编写一个解决方案：

1. 查找所有 **类别对**（其中 `category1` < `category2`）
2. 对于 **每个类别对**，确定 **同时** 购买了两类别产品的 **不同用户** 数量

如果至少有 `3` 个不同的客户购买了两个类别的产品，则类别对被视为 **可报告的**。

返回可报告类别对的结果表以 **customer_count** **降序** 排序，并且为了防止排序持平，以 **category1** 字典序 **升序** 排序，然后以 **category2 升序** 排序。

结果格式如下所示。

**示例：**

**输入：**

ProductPurchases 表：

```txt
+---------+------------+----------+
| user_id | product_id | quantity |
+---------+------------+----------+
| 1       | 101        | 2        |
| 1       | 102        | 1        |
| 1       | 201        | 3        |
| 1       | 301        | 1        |
| 2       | 101        | 1        |
| 2       | 102        | 2        |
| 2       | 103        | 1        |
| 2       | 201        | 5        |
| 3       | 101        | 2        |
| 3       | 103        | 1        |
| 3       | 301        | 4        |
| 3       | 401        | 2        |
| 4       | 101        | 1        |
| 4       | 201        | 3        |
| 4       | 301        | 1        |
| 4       | 401        | 2        |
| 5       | 102        | 2        |
| 5       | 103        | 1        |
| 5       | 201        | 2        |
| 5       | 202        | 3        |
+---------+------------+----------+
```

ProductInfo 表：

```txt
+------------+-------------+-------+
| product_id | category    | price |
+------------+-------------+-------+
| 101        | Electronics | 100   |
| 102        | Books       | 20    |
| 103        | Books       | 35    |
| 201        | Clothing    | 45    |
| 202        | Clothing    | 60    |
| 301        | Sports      | 75    |
| 401        | Kitchen     | 50    |
+------------+-------------+-------+
```

**输出：**

```txt
+-------------+-------------+----------------+
| category1   | category2   | customer_count |
+-------------+-------------+----------------+
| Books       | Clothing    | 3              |
| Books       | Electronics | 3              |
| Clothing    | Electronics | 3              |
| Electronics | Sports      | 3              |
+-------------+-------------+----------------+
```

**解释：**

- **Books-Clothing**:
  - 用户 1 购买来自 Books (102) 和 Clothing (201) 的商品
  - 用户 2 购买来自 Books (102, 103) 和 Clothing (201) 的商品
  - 用户 5 购买来自 Books (102, 103) 和 Clothing (201, 202) 的商品
  - 共计：3 个用户购买同一类别的商品
- **Books-Electronics**:
  - 用户 1 购买来自 Books (102) 和 Electronics (101) 的商品
  - 用户 2 购买来自 Books (102, 103) 和 Electronics (101) 的商品
  - 用户 3 购买来自 Books (103) 和 Electronics (101) 的商品
  - 共计：3 个消费者购买同一类别的商品
- **Clothing-Electronics**:
  - 用户 1 购买来自 Clothing (201) 和 Electronics (101) 的商品
  - 用户 2 购买来自 Clothing (201) 和 Electronics (101) 的商品
  - 用户 4 购买来自 Clothing (201) 和 Electronics (101) 的商品
  - 共计：3 个消费者购买同一类别的商品
- **Electronics-Sports**:
  - 用户 1 购买来自 Electronics (101) 和 Sports (301) 的商品
  - 用户 3 购买来自 Electronics (101) 和 Sports (301) 的商品
  - 用户 4 购买来自 Electronics (101) 和 Sports (301) 的商品
  - 共计：3 个消费者购买同一类别的商品
- 其它类别对比如 Clothing-Sports（只有 2 个消费者：用户 1 和 4）和 Books-Kitchen（只有 1 个消费者：用户 3）共同的消费者少于 3 个，因此不包含在结果内。

结果按 customer_count 降序排列。由于所有对都有相同的客户数量 3，它们按 category1（然后是 category2）升序排列。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
