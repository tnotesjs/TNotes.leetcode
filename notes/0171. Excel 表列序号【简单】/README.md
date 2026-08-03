# [0171. Excel 表列序号【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0171.%20Excel%20%E8%A1%A8%E5%88%97%E5%BA%8F%E5%8F%B7%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 二十六进制转换](#2-s1---二十六进制转换)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/excel-sheet-column-number/)

给你一个字符串 `columnTitle`，表示 Excel 表格中的列名称。返回该列名称对应的列序号。

例如：

```txt
A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28
...
```

---

示例 1：

```txt
输入: columnTitle = "A"
输出: 1
```

---

示例 2：

```txt
输入: columnTitle = "AB"
输出: 28
```

---

示例 3：

```txt
输入: columnTitle = "ZY"
输出: 701
```

---

提示：

- `1 <= columnTitle.length <= 7`
- `columnTitle` 仅由大写英文组成
- `columnTitle` 在范围 `["A", "FXSHRXW"]` 内

## 2. s.1 - 二十六进制转换

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 $n$ 是列名长度，需遍历每个字符
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- Excel 列名是 $1 \sim 26$ 映射到 `A`～`Z` 的二十六进制（与 0168 互为逆运算）
- 从左到右遍历：每位先将累计结果乘以 26，再加上当前字符对应的数值
- 字符映射：`A=1, B=2, …, Z=26`，即 `ch - 'A' + 1`
