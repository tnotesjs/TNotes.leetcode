# [0767. 重构字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0767.%20%E9%87%8D%E6%9E%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 贪心](#2--s1---贪心)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/reorganize-string/)

给定一个字符串 `s`，检查是否能重新排布其中的字母，使得两相邻的字符不同。

返回 `s` 的任意可能的重新排列。若不可行，返回空字符串 `""`。

示例 1：

```txt
输入: s = "aab"
输出: "aba"
```

示例 2：

```txt
输入: s = "aaab"
输出: ""
```

---

提示：

- `1 <= s.length <= 500`
- `s` 只包含小写字母

## 2. 🎯 s.1 - 贪心

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$，其中 n 是字符串长度
- 空间复杂度：$O(n)$

算法思路：

- 统计频率，若最大频率 > (n+1)/2 则无解
- 先将频率最高的字母填入偶数位，再依次填入其余字母
- 填完偶数位后继续填奇数位，保证相邻不同
