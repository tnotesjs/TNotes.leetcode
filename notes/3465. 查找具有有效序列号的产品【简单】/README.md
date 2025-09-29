# [3465. 查找具有有效序列号的产品【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3465.%20%E6%9F%A5%E6%89%BE%E5%85%B7%E6%9C%89%E6%9C%89%E6%95%88%E5%BA%8F%E5%88%97%E5%8F%B7%E7%9A%84%E4%BA%A7%E5%93%81%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-products-with-valid-serial-numbers/)

表：`products`

```txt
+--------------+------------+
| Column Name  | Type       |
+--------------+------------+
| product_id   | int        |
| product_name | varchar    |
| description  | varchar    |
+--------------+------------+
(product_id) 是这张表的唯一主键。
这张表的每一行表示一个产品的唯一 ID，名字和描述。
```

编写一个解决方案来找到所有描述中 **包含一个有效序列号** 模式的产品。一个有效序列号符合下述规则：

- 以 **SN** 字母开头（区分大小写）。
- 后面有恰好 `4` 位数字。
- 接着是一个短横（-）， 短横后面还有另一组 `4` **位数字**
- 序列号必须在描述内（可能不在描述的开头）

返回结果表以 `product_id` **升序** 排序。

结果格式如下所示。

**示例：**

**输入：**

products 表：

```txt
+------------+--------------+------------------------------------------------------+
| product_id | product_name | description                                          |
+------------+--------------+------------------------------------------------------+
| 1          | Widget A     | This is a sample product with SN1234-5678            |
| 2          | Widget B     | A product with serial SN9876-1234 in the description |
| 3          | Widget C     | Product SN1234-56789 is available now                |
| 4          | Widget D     | No serial number here                                |
| 5          | Widget E     | Check out SN4321-8765 in this description            |
+------------+--------------+------------------------------------------------------+
```

**输出：**

```txt
+------------+--------------+------------------------------------------------------+
| product_id | product_name | description                                          |
+------------+--------------+------------------------------------------------------+
| 1          | Widget A     | This is a sample product with SN1234-5678            |
| 2          | Widget B     | A product with serial SN9876-1234 in the description |
| 5          | Widget E     | Check out SN4321-8765 in this description            |
+------------+--------------+------------------------------------------------------+
```

**解释：**

- **产品 1：**有效的序列号 SN1234-5678
- **产品 2：**有效的序列号 SN9876-1234
- **产品 3：**无效的序列号 SN1234-56789（短横后包含 5 位数字）
- **产品 4：**描述中没有序列号
- **产品 5：**有效的序列号 SN4321-8765

结果表以 product_id 升序排序。

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
