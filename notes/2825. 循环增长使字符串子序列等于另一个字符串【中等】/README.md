# [2825. 循环增长使字符串子序列等于另一个字符串【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2825.%20%E5%BE%AA%E7%8E%AF%E5%A2%9E%E9%95%BF%E4%BD%BF%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%AD%90%E5%BA%8F%E5%88%97%E7%AD%89%E4%BA%8E%E5%8F%A6%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/make-string-a-subsequence-using-cyclic-increments/)

给你一个下标从 0 开始的字符串 `str1` 和 `str2`。

一次操作中，你选择 `str1` 中的若干下标。对于选中的每一个下标 `i` ，你将 `str1[i]` 循环 递增，变成下一个字符。也就是说 `'a'` 变成 `'b'` ，`'b'` 变成 `'c'` ，以此类推，`'z'` 变成 `'a'`。

如果执行以上操作 至多一次 ，可以让 `str2` 成为 `str1` 的子序列，请你返回 `true` ，否则返回 `false`。

---

注意：一个字符串的子序列指的是从原字符串中删除一些（可以一个字符也不删）字符后，剩下字符按照原本先后顺序组成的新字符串。

---

示例 1：

```txt
输入：str1 = "abc", str2 = "ad"
输出：true
解释：选择 str1 中的下标 2。
将 str1[2] 循环递增，得到 'd'。
因此，str1 变成 "abd" 且 str2 现在是一个子序列。所以返回 true。
```

---

示例 2：

```txt
输入：str1 = "zc", str2 = "ad"
输出：true
解释：选择 str1 中的下标 0 和 1。
将 str1[0] 循环递增得到 'a'。
将 str1[1] 循环递增得到 'd'。
因此，str1 变成 "ad" 且 str2 现在是一个子序列。所以返回 true。
```

---

示例 3：

```txt
输入：str1 = "ab", str2 = "d"
输出：false
解释：这个例子中，没法在执行一次操作的前提下，将 str2 变为 str1 的子序列。
所以返回 false。
```

---

提示：

- `1 <= str1.length <= 10^5`
- `1 <= str2.length <= 10^5`
- `str1` 和 `str2` 只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
