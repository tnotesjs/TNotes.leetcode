# [0171. Excel 表列序号【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0171.%20Excel%20%E8%A1%A8%E5%88%97%E5%BA%8F%E5%8F%B7%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 暴力解法](#2-s1---暴力解法)

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

## 2. s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 `n` 是输入字符串 `columnTitle` 的长度，因为需要遍历每个字符进行计算。
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间来存储结果和中间变量。
