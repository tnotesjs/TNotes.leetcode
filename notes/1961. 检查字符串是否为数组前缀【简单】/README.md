# [1961. 检查字符串是否为数组前缀【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1961.%20%E6%A3%80%E6%9F%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%98%AF%E5%90%A6%E4%B8%BA%E6%95%B0%E7%BB%84%E5%89%8D%E7%BC%80%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-string-is-a-prefix-of-array/)

给你一个字符串 `s` 和一个字符串数组 `words` ，请你判断 `s` 是否为 `words` 的 前缀字符串。

字符串 `s` 要成为 `words` 的 前缀字符串 ，需要满足：`s` 可以由 `words` 中的前 `k`（`k` 为 正数 ）个字符串按顺序相连得到，且 `k` 不超过 `words.length`。

如果 `s` 是 `words` 的 前缀字符串 ，返回 `true` ；否则，返回 `false`。

---

示例 1：

```txt
输入：s = "iloveleetcode", words = ["i","love","leetcode","apples"]
输出：true
解释：
s 可以由 "i"、"love" 和 "leetcode" 相连得到。
```

示例 2：

```txt
输入：s = "iloveleetcode", words = ["apples","i","love","leetcode"]
输出：false
解释：
数组的前缀相连无法得到 s。
```

---

提示：

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 20`
- `1 <= s.length <= 1000`
- `words[i]` 和 `s` 仅由小写英文字母组成

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
