# [2953. 统计完全子字符串【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2953.%20%E7%BB%9F%E8%AE%A1%E5%AE%8C%E5%85%A8%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 分段 + 滑动窗口](#2--s1---分段--滑动窗口)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-complete-substrings/)

给你一个字符串 `word` 和一个整数 `k`。

如果 `word` 的一个子字符串 `s` 满足以下条件，我们称它是 完全字符串：

- `s` 中每个字符 恰好 出现 `k` 次。
- 相邻字符在字母表中的顺序 至多 相差 `2`。也就是说，`s` 中两个相邻字符 `c1` 和 `c2`，它们在字母表中的位置相差 至多 为 `2`。

请你返回 `word` 中 完全 子字符串的数目。

子字符串 指的是一个字符串中一段连续 非空 的字符序列。

---

示例 1：

```txt
输入：word = "igigee", k = 2
输出：3

解释：
完全子字符串需要满足每个字符恰好出现 2 次，且相邻字符相差至多为 2 ：igigee, igigee, igigee。
```

---

示例 2：

```txt
输入：word = "aaabbbccc", k = 3
输出：6

解释：
完全子字符串需要满足每个字符恰好出现 3 次，且相邻字符相差至多为 2 ：aaabbbccc, aaabbbccc, aaabbbccc, aaabbbccc, aaabbbccc, aaabbbccc。
```

---

提示：

- `1 <= word.length <= 10^5`
- `word` 只包含小写英文字母。
- `1 <= k <= word.length`

## 2. 🎯 s.1 - 分段 + 滑动窗口

::: code-group

<<< ./solutions/1/1.js [js] <<< ./solutions/1/1.c [c] <<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(|\Sigma| \cdot n)$，其中 n 是字符串长度，$|\Sigma| = 26$
- 空间复杂度：$O(|\Sigma|)$，频率数组的空间

算法思路：

- 先按相邻字符差值 $> 2$ 的位置将字符串分段，每段内相邻字符差值 $\leq 2$
- 对每段，枚举不同字符种类数 `c`（1 到 26），窗口大小固定为 `c * k`
- 用滑动窗口维护频率数组，统计恰好有 c 种字符且每种恰好出现 k 次的窗口数
