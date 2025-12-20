# [0709. 转换成小写字母【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0709.%20%E8%BD%AC%E6%8D%A2%E6%88%90%E5%B0%8F%E5%86%99%E5%AD%97%E6%AF%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 使用内置方法](#2--s1---使用内置方法)
- [3. 🎯 s.2 - ASCII 码转换](#3--s2---ascii-码转换)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/to-lower-case/)

给你一个字符串 `s` ，将该字符串中的大写字母转换成相同的小写字母，返回新的字符串。

---

- 示例 1：

```txt
输入：s = "Hello"
输出："hello"
```

- 示例 2：

```txt
输入：s = "here"
输出："here"
```

- 示例 3：

```txt
输入：s = "LOVELY"
输出："lovely"
```

---

提示：

- `1 <= s.length <= 100`
- `s` 由 ASCII 字符集中的可打印字符组成

## 2. 🎯 s.1 - 使用内置方法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是字符串的长度
- 空间复杂度：$O(n)$，需要创建新的字符串

## 3. 🎯 s.2 - ASCII 码转换

::: code-group

<<< ./solutions/2/1.js [1.js]

<<< ./solutions/2/2.js [2.js]

:::

- 时间复杂度：$O(n)$，其中 n 是字符串的长度，需要遍历每个字符
- 空间复杂度：$O(n)$，需要创建新的字符串存储结果
