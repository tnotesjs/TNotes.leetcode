# [0516. 最长回文子序列【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0516.%20%E6%9C%80%E9%95%BF%E5%9B%9E%E6%96%87%E5%AD%90%E5%BA%8F%E5%88%97%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 区间 DP](#2--s1---区间-dp)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/longest-palindromic-subsequence/)

给你一个字符串 `s`，找出其中最长的回文子序列，并返回该序列的长度。

子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

---

示例 1：

```txt
输入：s = "bbbab"
输出：4
解释：一个可能的最长回文子序列为 "bbbb"。
```

示例 2：

```txt
输入：s = "cbbd"
输出：2
解释：一个可能的最长回文子序列为 "bb"。
```

---

提示：

- `1 <= s.length <= 1000`
- `s` 仅由小写英文字母组成

## 2. 🎯 s.1 - 区间 DP

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$
- 空间复杂度：$O(n^2)$

算法思路：

- `dp[i][j]` 表示 `s[i..j]` 中最长回文子序列长度
- 若 `s[i] == s[j]`，则 `dp[i][j] = dp[i+1][j-1] + 2`
- 否则 `dp[i][j] = max(dp[i+1][j], dp[i][j-1])`
