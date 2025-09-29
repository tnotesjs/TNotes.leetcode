# [3436. 查找合法邮箱【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3436.%20%E6%9F%A5%E6%89%BE%E5%90%88%E6%B3%95%E9%82%AE%E7%AE%B1%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-valid-emails/)

表：`Users`

```txt
+-----------------+---------+
| Column Name     | Type    |
+-----------------+---------+
| user_id         | int     |
| email           | varchar |
+-----------------+---------+
(user_id) 是这张表的唯一主键。
每一行包含用户的唯一 ID 和邮箱地址。
```

编写一个解决方案来查找所有 **合法邮箱地址**。一个合法的邮箱地址符合下述条件：

- 只包含一个 `@` 符号。
- 以 `.com` 结尾。
- `@` 符号前面的部分只包含 **字母数字** 字符和 **下划线**。
- `@` 符号后面与 `.com` 前面的部分 包含 **只有字母** 的域名。

返回结果表以 `user_id` **升序** 排序。

**示例：**

**输入：**

Users 表：

```txt
+---------+---------------------+
| user_id | email               |
+---------+---------------------+
| 1       | alice@example.com   |
| 2       | bob_at_example.com  |
| 3       | charlie@example.net |
| 4       | david@domain.com    |
| 5       | eve@invalid         |
+---------+---------------------+
```

**输出：**

```txt
+---------+-------------------+
| user_id | email             |
+---------+-------------------+
| 1       | alice@example.com |
| 4       | david@domain.com  |
+---------+-------------------+
```

**解释：**

- **alice@example.com** 是合法的因为它包含一个 `@`，alice 是只有字母数字的，并且 example.com 以字母开始并以 .com 结束。
- **bob_at_example.com** 是不合法的因为它包含下划线但没有 `@`。
- **charlie@example.net** 是不合法的因为域名没有以 `.com` 结尾。
- **david@domain.com** 是合法的因为它满足所有条件。
- **eve@invalid** 是不合法的因为域名没有以 `.com` 结尾。

结果表以 user_id 升序排序。

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
