# [2887. 填充缺失值【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2887.%20%E5%A1%AB%E5%85%85%E7%BC%BA%E5%A4%B1%E5%80%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/fill-missing-data/)

```txt
DataFrame products
+-------------+--------+
| Column Name | Type   |
+-------------+--------+
| name        | object |
| quantity    | int    |
| price       | int    |
+-------------+--------+
```

编写一个解决方案，在 `quantity` 列中将缺失的值填充为 `**0**`。

返回结果如下示例所示。

---

- **示例 1：**

```txt
输入：
+-----------------+----------+-------+
| name            | quantity | price |
+-----------------+----------+-------+
| Wristwatch      | 32       | 135   |
| WirelessEarbuds | None     | 821   |
| GolfClubs       | None     | 9319  |
| Printer         | 849      | 3051  |
+-----------------+----------+-------+
输出：
+-----------------+----------+-------+
| name            | quantity | price |
+-----------------+----------+-------+
| Wristwatch      | 32       | 135   |
| WirelessEarbuds | 0        | 821   |
| GolfClubs       | 0        | 9319  |
| Printer         | 849      | 3051  |
+-----------------+----------+-------+
解释：
Toaster 和 Headphones 的数量被填充为 0。
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
