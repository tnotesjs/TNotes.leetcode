# [0467. 环绕字符串中唯一的子字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0467.%20%E7%8E%AF%E7%BB%95%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E5%94%AF%E4%B8%80%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/unique-substrings-in-wraparound-string/)

定义字符串 `base` 为一个 `"abcdefghijklmnopqrstuvwxyz"` 无限环绕的字符串，所以 `base` 看起来是这样的：

- `"...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd...."`.

给你一个字符串 `s`，请你统计并返回 `s` 中有多少 不同 非空子串 也在 `base` 中出现。

示例 1：

```txt
输入：s = "a"
输出：1
解释：字符串 s 的子字符串 "a" 在 base 中出现。
```

示例 2：

```txt
输入：s = "cac"
输出：2
解释：字符串 s 有两个子字符串 ("a", "c") 在 base 中出现。
```

示例 3：

```txt
输入：s = "zab"
输出：6
解释：字符串 s 有六个子字符串 ("z", "a", "b", "za", "ab", and "zab") 在 base 中出现。
```

---

提示：

- `1 <= s.length <= 10^5`
- s 由小写英文字母组成

## 2. 🎯 s.1 - DP

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n)$
- 空间复杂度：$O(|\Sigma|)$

算法思路：

- 记录以每个字符结尾的最长连续环绕子串长度
- 以字符 $c$ 结尾的最长连续子串长度为 $k$，则贡献 $k$ 个不同子串
- 求和即为答案
