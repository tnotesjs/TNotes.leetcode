# [0168. Excel 表列名称【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0168.%20Excel%20%E8%A1%A8%E5%88%97%E5%90%8D%E7%A7%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 二十六进制转换](#2-s1---二十六进制转换)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/excel-sheet-column-title/)

给你一个整数 `columnNumber`，返回它在 Excel 表中相对应的列名称。

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
输入：columnNumber = 1
输出："A"
```

---

示例 2：

```txt
输入：columnNumber = 28
输出："AB"
```

---

示例 3：

```txt
输入：columnNumber = 701
输出："ZY"
```

---

示例 4：

```txt
输入：columnNumber = 2147483647
输出："FXSHRXW"
```

---

提示：

- `1 <= columnNumber <= 2^31 - 1`

## 2. s.1 - 二十六进制转换

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(\log_{26} n)$，其中 $n$ 是列号，每次循环将数字除以 26
- 空间复杂度：$O(1)$，除结果字符串外只使用常数额外空间

算法思路：

- Excel 列名本质是 $1 \sim 26$ 映射到 `A`～`Z` 的二十六进制，只是从 1 起算而非从 0
- 每次先将 `columnNumber` 减 1，对齐到 0-indexed，再对 26 取模得到当前位字符
- 整除 26 进入更高位，从低位到高位拼到结果前面，直到数字变为 0
