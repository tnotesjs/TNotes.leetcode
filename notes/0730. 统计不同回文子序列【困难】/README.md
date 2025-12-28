# [0730. 统计不同回文子序列【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0730.%20%E7%BB%9F%E8%AE%A1%E4%B8%8D%E5%90%8C%E5%9B%9E%E6%96%87%E5%AD%90%E5%BA%8F%E5%88%97%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-different-palindromic-subsequences/)

给你一个字符串 `s` ，返回 `s` 中不同的非空回文子序列个数。由于答案可能很大，请返回对 `10^9 + 7` 取余 的结果。

字符串的子序列可以经由字符串删除 0 个或多个字符获得。

如果一个序列与它反转后的序列一致，那么它是回文序列。

如果存在某个 `i` , 满足 `ai != bi` ，则两个序列 `a1, a2, ...` 和 `b1, b2, ...` 不同。

---

- 示例 1：

```txt
输入：s = 'bccb'
输出：6
解释：6 个不同的非空回文子字符序列分别为：'b', 'c', 'bb', 'cc', 'bcb', 'bccb'。
注意：'bcb' 虽然出现两次但仅计数一次。
```

- 示例 2：

```txt
输入：s = 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
输出：104860361
解释：共有 3104860382 个不同的非空回文子序列，104860361 是对 109 + 7 取余后的值。
```

---

提示：

- `1 <= s.length <= 1000`
- `s[i]` 仅包含 `'a'`, `'b'`, `'c'` 或 `'d'`

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
