# [0434. 字符串中的单词数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0434.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E5%8D%95%E8%AF%8D%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 识别单词边界](#2--s1---识别单词边界)
- [3. 🎯 s.2 - 字符串切片](#3--s2---字符串切片)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/number-of-segments-in-a-string/)

统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。

请注意，你可以假定字符串里不包括任何不可打印的字符。

示例:

```txt
输入: "Hello, my name is John"
输出: 5
解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。
```

## 2. 🎯 s.1 - 识别单词边界

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是字符串的长度，需要遍历整个字符串一次
- 空间复杂度：$O(1)$，只使用了常数级别的额外空间

## 3. 🎯 s.2 - 字符串切片

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(n)$，其中 n 是字符串 `s` 的长度，因为需要遍历整个字符串进行分割和过滤操作。
- 空间复杂度：$O(n)$，因为 `split` 方法会创建一个新的数组来存储分割后的字符串段落，其长度最多为 n。
