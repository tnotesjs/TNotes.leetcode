# [1961. 检查字符串是否为数组前缀【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1961.%20%E6%A3%80%E6%9F%A5%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%98%AF%E5%90%A6%E4%B8%BA%E6%95%B0%E7%BB%84%E5%89%8D%E7%BC%80%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 拼接前缀对比](#2--s1---拼接前缀对比)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-string-is-a-prefix-of-array/)

给你一个字符串 `s` 和一个字符串数组 `words`，请你判断 `s` 是否为 `words` 的前缀字符串。

字符串 `s` 要成为 `words` 的前缀字符串，需要满足：`s` 可以由 `words` 中的前 `k`（`k` 为正数 ）个字符串按顺序相连得到，且 `k` 不超过 `words.length`。

如果 `s` 是 `words` 的前缀字符串，返回 `true`；否则，返回 `false`。

---

示例 1：

```txt
输入：s = "iloveleetcode", words = ["i","love","leetcode","apples"]
输出：true

解释：
s 可以由 "i"、"love" 和 "leetcode" 相连得到。
```

---

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

## 2. 🎯 s.1 - 拼接前缀对比

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(M)$，其中 M 是 s 的长度，最多拼接到长度等于或超过 s 就停止
- 空间复杂度：$O(M)$，需要存储拼接后的字符串

算法思路：

题目要求判断 s 是否能由 words 的前 k 个字符串完整拼接得到。

- 依次遍历 words 数组，逐个拼接字符串到 built 中
- 每次拼接后检查：
  - 如果 built 恰好等于 s，说明找到了完整匹配，返回 true
  - 如果 built 的长度已经超过 s，说明无法通过完整拼接得到 s，返回 false
- 遍历结束后仍未匹配成功，返回 false
- 注意：必须是完整字符串拼接，例如 s="a"、words=["aa"] 应返回 false，因为无法截取部分字符串
