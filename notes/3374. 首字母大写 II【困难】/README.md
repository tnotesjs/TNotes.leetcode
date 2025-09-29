# [3374. 首字母大写 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3374.%20%E9%A6%96%E5%AD%97%E6%AF%8D%E5%A4%A7%E5%86%99%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/first-letter-capitalization-ii/)

表：`user_content`

```txt
+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| content_id  | int     |
| content_text| varchar |
+-------------+---------+
content_id 是这张表的唯一主键。
每一行包含一个不同的 ID 以及对应的文本内容。
```

编写一个解决方案来根据下面的规则来转换 `content_text` 列中的文本：

- 将每个单词的 **第一个字母** 转换为 **大写**，其余字母 **保持小写**。
- 特殊处理包含特殊字符的单词：
  - 对于用短横 `-` 连接的词语，**两个部份** 都应该 **大写**（**例如**，top-rated → Top-Rated）
- 所有其他 **格式** 和 **空格** 应保持 **不变**

返回结果表同时包含原始的 `content_text` 以及根据上述规则修改后的文本。

结果格式如下例所示。

**示例：**

**输入：**

user_content 表：

```txt
+------------+---------------------------------+
| content_id | content_text                    |
+------------+---------------------------------+
| 1          | hello world of SQL              |
| 2          | the QUICK-brown fox             |
| 3          | modern-day DATA science         |
| 4          | web-based FRONT-end development |
+------------+---------------------------------+
```

**输出：**

```txt
+------------+---------------------------------+---------------------------------+
| content_id | original_text                   | converted_text                  |
+------------+---------------------------------+---------------------------------+
| 1          | hello world of SQL              | Hello World Of Sql              |
| 2          | the QUICK-brown fox             | The Quick-Brown Fox             |
| 3          | modern-day DATA science         | Modern-Day Data Science         |
| 4          | web-based FRONT-end development | Web-Based Front-End Development |
+------------+---------------------------------+---------------------------------+
```

**解释：**

- 对于 content_id = 1：
  - 每个单词的首字母都是大写的："Hello World Of Sql"
- 对于 content_id = 2：
  - 包含的连字符词 "QUICK-brown" 变为 "Quick-Brown"
  - 其它单词遵循普通的首字母大写规则
- 对于 content_id = 3：
  - 连字符词 "modern-day" 变为 "Modern-Day"
  - "DATA" 转换为 "Data"
- 对于 content_id = 4：
  - 包含两个连字符词："web-based" → "Web-Based"
  - 以及 "FRONT-end" → "Front-End"

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
