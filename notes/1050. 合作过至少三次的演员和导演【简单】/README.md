# [1050. 合作过至少三次的演员和导演【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1050.%20%E5%90%88%E4%BD%9C%E8%BF%87%E8%87%B3%E5%B0%91%E4%B8%89%E6%AC%A1%E7%9A%84%E6%BC%94%E5%91%98%E5%92%8C%E5%AF%BC%E6%BC%94%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/actors-and-directors-who-cooperated-at-least-three-times/)

`ActorDirector`  表：

```txt
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| actor_id    | int     |
| director_id | int     |
| timestamp   | int     |
+-------------+---------+
timestamp 是这张表的主键(具有唯一值的列).
```

编写解决方案找出合作过至少三次的演员和导演的 id 对  `(actor_id, director_id)`

---

- **示例 1：**

```txt
输入：
ActorDirector 表：
+-------------+-------------+-------------+
| actor_id    | director_id | timestamp   |
+-------------+-------------+-------------+
| 1           | 1           | 0           |
| 1           | 1           | 1           |
| 1           | 1           | 2           |
| 1           | 2           | 3           |
| 1           | 2           | 4           |
| 2           | 1           | 5           |
| 2           | 1           | 6           |
+-------------+-------------+-------------+
输出：
+-------------+-------------+
| actor_id    | director_id |
+-------------+-------------+
| 1           | 1           |
+-------------+-------------+
解释：
唯一的 id 对是 (1, 1)，他们恰好合作了 3 次。
```

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
