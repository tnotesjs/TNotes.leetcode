# [0405. 数字转换为十六进制数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0405.%20%E6%95%B0%E5%AD%97%E8%BD%AC%E6%8D%A2%E4%B8%BA%E5%8D%81%E5%85%AD%E8%BF%9B%E5%88%B6%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)
- [3. 🔗 引用](#3--引用)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/convert-a-number-to-hexadecimal/)

给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用  [补码运算][1]  方法。

答案字符串中的所有字母都应该是小写字符，并且除了 0 本身之外，答案中不应该有任何前置零。

---

**注意:** 不允许使用任何由库提供的将数字直接转换或格式化为十六进制的方法来解决这个问题。

---

- **示例 1：**

```txt
输入：num = 26
输出："1a"
```

- **示例 2：**

```txt
输入：num = -1
输出："ffffffff"
```

---

**提示：**

- `-2^31 <= num <= 2^31 - 1`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🔗 引用

- [补码运算][1]
  - 百度百科

[1]: https://baike.baidu.com/item/%E8%A1%A5%E7%A0%81/6854613?fr=aladdin
