# [1876. 长度为三且各字符不同的子字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1876.%20%E9%95%BF%E5%BA%A6%E4%B8%BA%E4%B8%89%E4%B8%94%E5%90%84%E5%AD%97%E7%AC%A6%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/substrings-of-size-three-with-distinct-characters/)

如果一个字符串不含有任何重复字符，我们称这个字符串为 好 字符串。

给你一个字符串 `s` ，请你返回 `s` 中长度为 3 的 好子字符串 的数量。

注意，如果相同的好子字符串出现多次，每一次都应该被记入答案之中。

子字符串 是一个字符串中连续的字符序列。

---

- 示例 1：

```txt
输入：s = "xyzzaz"
输出：1
解释：总共有 4 个长度为 3 的子字符串："xyz"，"yzz"，"zza" 和 "zaz"。
唯一的长度为 3 的好子字符串是 "xyz"。
```

- 示例 2：

```txt
输入：s = "aababcabc"
输出：4
解释：总共有 7 个长度为 3 的子字符串："aab"，"aba"，"bab"，"abc"，"bca"，"cab" 和 "abc"。
好子字符串包括 "abc"，"bca"，"cab" 和 "abc"。
```

---

提示：

- `1 <= s.length <= 100`
- `s`​​​​​​ 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
