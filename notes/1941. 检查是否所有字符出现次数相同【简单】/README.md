# [1941. 检查是否所有字符出现次数相同【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1941.%20%E6%A3%80%E6%9F%A5%E6%98%AF%E5%90%A6%E6%89%80%E6%9C%89%E5%AD%97%E7%AC%A6%E5%87%BA%E7%8E%B0%E6%AC%A1%E6%95%B0%E7%9B%B8%E5%90%8C%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/check-if-all-characters-have-equal-number-of-occurrences/)

给你一个字符串 `s`，如果 `s` 是一个好字符串，请你返回 `true`，否则请返回 `false`。

如果 `s` 中出现过的所有字符的出现次数相同，那么我们称字符串 `s` 是好字符串。

---

示例 1：

```txt
输入：s = "abacbc"
输出：true

解释：
s 中出现过的字符为 'a'，'b' 和 'c'。s 中所有字符均出现 2 次。
```

---

示例 2：

```txt
输入：s = "aaabb"
输出：false

解释：
s 中出现过的字符为 'a' 和 'b'。
'a' 出现了 3 次，'b' 出现了 2 次，两者出现次数不同。
```

---

提示：

- `1 <= s.length <= 1000`
- `s` 只包含小写英文字母。

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N + \Sigma)$，其中 N 是字符串长度，$\Sigma = 26$ 是字母表大小，遍历字符串需要 $O(N)$，检查频次数组需要 $O(26)$
- 空间复杂度：$O(\Sigma)$，需要长度为 26 的数组存储字母频次

算法思路：

- 使用长度为 26 的数组统计每个字母的出现次数
- 遍历频次数组，跳过未出现的字母（频次为 0）
- 记录第一个非零频次作为目标值 target
- 检查后续所有非零频次是否都等于 target
