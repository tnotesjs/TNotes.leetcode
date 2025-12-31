# [1704. 判断字符串的两半是否相似【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1704.%20%E5%88%A4%E6%96%AD%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E4%B8%A4%E5%8D%8A%E6%98%AF%E5%90%A6%E7%9B%B8%E4%BC%BC%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 元音计数对比](#2--s1---元音计数对比)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/determine-if-string-halves-are-alike/)

给你一个偶数长度的字符串 `s`。将其拆分成长度相同的两半，前一半为 `a` ，后一半为 `b`。

两个字符串 相似 的前提是它们都含有相同数目的元音（`'a'`，`'e'`，`'i'`，`'o'`，`'u'`，`'A'`，`'E'`，`'I'`，`'O'`，`'U'`）。注意，`s` 可能同时含有大写和小写字母。

如果 `a` 和 `b` 相似，返回 `true` ；否则，返回 `false`。

---

示例 1：

```txt
输入：s = "book"
输出：true
解释：a = "bo" 且 b = "ok"。a 中有 1 个元音，b 也有 1 个元音。所以，a 和 b 相似。
```

示例 2：

```txt
输入：s = "textbook"
输出：false
解释：a = "text" 且 b = "book"。a 中有 1 个元音，b 中有 2 个元音。因此，a 和 b 不相似。
注意，元音 o 在 b 中出现两次，记为 2 个。
```

---

提示：

- `2 <= s.length <= 1000`
- `s.length` 是偶数
- `s` 由 大写和小写 字母组成

## 2. 🎯 s.1 - 元音计数对比

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，单次遍历
- 空间复杂度：$O(1)$，常数集合

解题思路：

- 使用元音集合，遍历字符串前后两半分别计数，最终比较是否相等。
