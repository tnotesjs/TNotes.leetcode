# [1517. 查找拥有有效邮箱的用户【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1517.%20%E6%9F%A5%E6%89%BE%E6%8B%A5%E6%9C%89%E6%9C%89%E6%95%88%E9%82%AE%E7%AE%B1%E7%9A%84%E7%94%A8%E6%88%B7%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-users-with-valid-e-mails)

表: `Users`

```txt
+---------------+---------+
| Column Name   | Type    |
+---------------+---------+
| user_id       | int     |
| name          | varchar |
| mail          | varchar |
+---------------+---------+
user_id 是该表的主键（具有唯一值的列）。
该表包含了网站已注册用户的信息。有一些电子邮件是无效的。
```

编写一个解决方案，以查找具有有效电子邮件的用户。

一个有效的电子邮件具有前缀名称和域，其中：

1. **前缀** 名称是一个字符串，可以包含字母（大写或小写），数字，下划线 `'_'` ，点 `'.'` 和（或）破折号 `'-'` 。前缀名称 **必须** 以字母开头。
2. **域** 为 `'@leetcode.com'` 。

以任何顺序返回结果表。

结果的格式如以下示例所示：

---

- **示例 1：**

```txt
输入：
Users 表:
+---------+-----------+-------------------------+
| user_id | name      | mail                    |
+---------+-----------+-------------------------+
| 1       | Winston   | winston@leetcode.com    |
| 2       | Jonathan  | jonathanisgreat         |
| 3       | Annabelle | bella-@leetcode.com     |
| 4       | Sally     | sally.come@leetcode.com |
| 5       | Marwan    | quarz#2020@leetcode.com |
| 6       | David     | david69@gmail.com       |
| 7       | Shapiro   | .shapo@leetcode.com     |
+---------+-----------+-------------------------+
输出：
+---------+-----------+-------------------------+
| user_id | name      | mail                    |
+---------+-----------+-------------------------+
| 1       | Winston   | winston@leetcode.com    |
| 3       | Annabelle | bella-@leetcode.com     |
| 4       | Sally     | sally.come@leetcode.com |
+---------+-----------+-------------------------+
解释：
用户 2 的电子邮件没有域。
用户 5 的电子邮件带有不允许的 '#' 符号。
用户 6 的电子邮件没有 leetcode 域。
用户 7 的电子邮件以点开头。
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
