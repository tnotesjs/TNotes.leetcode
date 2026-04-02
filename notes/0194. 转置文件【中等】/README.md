# [0194. 转置文件【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0194.%20%E8%BD%AC%E7%BD%AE%E6%96%87%E4%BB%B6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - awk 转置](#2--s1---awk-转置)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/transpose-file/)

给定一个文件 `file.txt`，转置它的内容。

你可以假设每行列数相同，并且每个字段由 `' '` 分隔。

示例：

假设 `file.txt` 文件内容如下：

```txt
name age
alice 21
ryan 30
```

应当输出：

```txt
name alice ryan
age 21 30
```

## 2. 🎯 s.1 - awk 转置

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(m \times n)$，其中 $m$ 是行数，$n$ 是列数
- 空间复杂度：$O(m \times n)$，存储所有元素

算法思路：

- 这是一道 Shell 题目，使用 `awk` 实现矩阵转置
- 遍历每行的每个字段，用数组 `a[i]` 累积拼接第 `i` 列的所有元素
- 最后逐行输出每一列的内容
