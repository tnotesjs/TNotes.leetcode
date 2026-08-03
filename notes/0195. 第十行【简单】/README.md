# [0195. 第十行【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0195.%20%E7%AC%AC%E5%8D%81%E8%A1%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 题目描述](#1-题目描述)
- [2. s.1 - 暴力解法](#2-s1---暴力解法)

<!-- endregion:toc -->

## 1. 题目描述

- [leetcode](https://leetcode.cn/problems/tenth-line/)

给定一个文本文件 `file.txt`，请只打印这个文件中的第十行。

示例:

假设 `file.txt` 有如下内容：

```txt
Line 1
Line 2
Line 3
Line 4
Line 5
Line 6
Line 7
Line 8
Line 9
Line 10
```

你的脚本应当显示第十行：

Line 10

说明:

1. 如果文件少于十行，你应当输出什么？
2. 至少有三种不同的解法，请尝试尽可能多的方法来解题。

## 2. s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
