# [0132. 分割回文串 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0132.%20%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 中心扩展 + 一维 DP](#2--s1---中心扩展--一维-dp)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/palindrome-partitioning-ii/)

给你一个字符串 `s`，请你将 `s` 分割成一些子串，使每个子串都是回文串。

> 回文串：是向前和向后读都相同的字符串。

返回符合要求的最少分割次数。

---

示例 1：

```txt
输入：s = "aab"
输出：1
```

解释：只需一次分割就可将 s 分割成 `["aa","b"]` 这样两个回文子串。

---

示例 2：

```txt
输入：s = "a"
输出：0
```

---

示例 3：

```txt
输入：s = "ab"
输出：1
```

---

提示：

- `1 <= s.length <= 2000`
- `s` 仅由小写英文字母组成

## 2. 🎯 s.1 - 中心扩展 + 一维 DP

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n^2)$，每个位置都要作为奇偶回文中心向两侧扩展，最坏情况下总扩展次数为二次方
- 空间复杂度：$O(n)$，只维护一个前缀最少分割次数数组

算法思路：

- 定义 `cuts[i]` 表示前缀 `s[0..i]` 的最少分割次数，初始令 `cuts[i] = i`，表示最坏情况下每个字符都单独切开
- 枚举每个位置作为回文中心，并分别做两次中心扩展：`(i, i)` 处理奇数长度回文，`(i, i + 1)` 处理偶数长度回文
- 状态转移方程：$cuts[right] = \min(cuts[right], cuts[left - 1] + 1)$
  - 当扩展得到一个回文区间 `s[left..right]` 时，如果 `left == 0`，说明前缀 `s[0..right]` 本身就是回文串，此时 `cuts[right] = 0`，即 newCut => `0`
  - 否则可以在 `left - 1` 和 `left` 之间切一刀，即 newCut => `cuts[left - 1] + 1`
  - 取 `newCut` 和 `cuts[right]` 中的较小者，更新 `cuts[right]`
- 所有回文中心处理完后，`cuts[n - 1]` 就是整个字符串的最少分割次数
