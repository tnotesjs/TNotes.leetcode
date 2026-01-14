# [1071. 字符串的最大公因子【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1071.%20%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E5%A4%A7%E5%85%AC%E5%9B%A0%E5%AD%90%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 欧几里得算法](#2--s1---欧几里得算法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/greatest-common-divisor-of-strings)

对于字符串 `s` 和 `t`，只有在 `s = t + t + t + ... + t + t`（`t` 自身连接 1 次或多次）时，我们才认定 “`t` 能除尽 `s`”。

给定两个字符串 `str1` 和 `str2`。返回 最长字符串 `x`，要求满足 `x` 能除尽 `str1` 且 `x` 能除尽 `str2`。

---

示例 1：

```txt
输入：str1 = "ABCABC", str2 = "ABC"
输出："ABC"
```

---

示例 2：

```txt
输入：str1 = "ABABAB", str2 = "ABAB"
输出："AB"
```

---

示例 3：

```txt
输入：str1 = "LEET", str2 = "CODE"
输出：""
```

---

提示：

- `1 <= str1.length, str2.length <= 1000`
- `str1` 和 `str2` 由大写英文字母组成

## 2. 🎯 s.1 - 欧几里得算法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(m + n + \log(\min(m, n)))$，其中 m 和 n 分别是两个字符串的长度，拼接并比较字符串需要 $O(m + n)$，计算最大公约数需要 $O(\log(\min(m, n)))$
- 空间复杂度：$O(m + n)$，拼接字符串时会创建两个长度为 $m + n$ 的新字符串

解题思路：

- 核心思想：如果两个字符串存在公共因子，则 `str1 + str2` 必定等于 `str2 + str1`
- 先判断 `str1 + str2` 是否等于 `str2 + str1`，若不等则不存在公共因子，返回空字符串
- 若存在公共因子，则最大公共因子的长度为两个字符串长度的最大公约数（GCD）
- 使用欧几里得算法计算两个字符串长度的 GCD
- 返回 `str1` 前 GCD 个字符即为最大公共因子字符串
