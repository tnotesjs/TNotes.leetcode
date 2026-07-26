# [0168. Excel 表列名称【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0168.%20Excel%20%E8%A1%A8%E5%88%97%E5%90%8D%E7%A7%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 暴力解法](#2-s1---暴力解法)

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

## 2. s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(log_{26}N)$，其中 N 是给定的列号，因为每次循环都将数字除以 26
- 空间复杂度：$O(1)$，除了结果字符串外，只使用了常数级别的额外空间
