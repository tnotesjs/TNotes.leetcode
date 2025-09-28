# [2877. 从表中创建 DataFrame【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2877.%20%E4%BB%8E%E8%A1%A8%E4%B8%AD%E5%88%9B%E5%BB%BA%20DataFrame%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/create-a-dataframe-from-list/)

编写一个解决方案，基于名为 `student_data` 的二维列表 **创建** 一个 DataFrame 。这个二维列表包含一些学生的 ID 和年龄信息。

DataFrame 应该有两列， `student_id` 和 `age`，并且与原始二维列表的顺序相同。

返回结果格式如下示例所示。

---

- **示例 1：**

```txt
输入：
student_data:
[
  [1, 15],
  [2, 11],
  [3, 11],
  [4, 20]
]
输出：
+------------+-----+
| student_id | age |
+------------+-----+
| 1          | 15  |
| 2          | 11  |
| 3          | 11  |
| 4          | 20  |
+------------+-----+
解释：
基于 student_data 创建了一个 DataFrame，包含 student_id 和 age 两列。
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
