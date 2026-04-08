# [0131. 分割回文串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0131.%20%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 回溯 + DP 预处理](#2--s1---回溯--dp-预处理)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/palindrome-partitioning/)

给你一个字符串 `s`，请你将 `s` 分割成一些子串，使每个子串都是回文串。返回 `s` 所有可能的分割方案。

> - 子字符串：是字符串中连续的非空字符序列。
> - 回文串：是向前和向后读都相同的字符串。

---

示例 1：

```txt
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
```

---

示例 2：

```txt
输入：s = "a"
输出：[["a"]]
```

---

提示：

- `1 <= s.length <= 16`
- `s` 仅由小写英文字母组成

## 2. 🎯 s.1 - 回溯 + DP 预处理

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \cdot 2^n)$，其中 $n$ 是字符串长度，最坏情况下有 $2^{n-1}$ 种分割方式
- 空间复杂度：$O(n^2)$，DP 表的大小

算法思路：

- 先用 DP 预处理出 `dp[i][j]` 表示 `s[i..j]` 是否为回文串，避免回溯过程中重复判断
- 回溯遍历所有可能的分割点，当前子串是回文串时加入路径并继续递归
