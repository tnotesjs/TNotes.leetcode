# [2645. 构造有效字符串的最少插入数【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2645.%20%E6%9E%84%E9%80%A0%E6%9C%89%E6%95%88%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%9C%80%E5%B0%91%E6%8F%92%E5%85%A5%E6%95%B0%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/minimum-additions-to-make-valid-string/)

给你一个字符串 `word` ，你可以向其中任何位置插入 "a"、"b" 或 "c" 任意次，返回使 `word` 有效 需要插入的最少字母数。

如果字符串可以由 "abc" 串联多次得到，则认为该字符串 有效。

---

- 示例 1：

```txt
输入：word = "b"
输出：2
解释：在 "b" 之前插入 "a" ，在 "b" 之后插入 "c" 可以得到有效字符串 "abc"。
```

- 示例 2：

```txt
输入：word = "aaa"
输出：6
解释：在每个 "a" 之后依次插入 "b" 和 "c" 可以得到有效字符串 "abcabcabc"。
```

- 示例 3：

```txt
输入：word = "abc"
输出：0
解释：word 已经是有效字符串，不需要进行修改。
```

---

提示：

- `1 <= word.length <= 50`
- `word` 仅由字母 "a"、"b" 和 "c" 组成。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
