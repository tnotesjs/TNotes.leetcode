# [1593. 拆分字符串使唯一子字符串的数目最大【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1593.%20%E6%8B%86%E5%88%86%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%BD%BF%E5%94%AF%E4%B8%80%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%95%B0%E7%9B%AE%E6%9C%80%E5%A4%A7%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/split-a-string-into-the-max-number-of-unique-substrings/)

给你一个字符串 `s` ，请你拆分该字符串，并返回拆分后唯一子字符串的最大数目。

字符串 `s` 拆分后可以得到若干 非空子字符串 ，这些子字符串连接后应当能够还原为原字符串。但是拆分出来的每个子字符串都必须是 唯一的。

注意：子字符串 是字符串中的一个连续字符序列。

---

示例 1：

```txt
输入：s = "ababccc"
输出：5

解释：
一种最大拆分方法为 ['a', 'b', 'ab', 'c', 'cc']。
像 ['a', 'b', 'a', 'b', 'c', 'cc'] 这样拆分不满足题目要求，因为其中的 'a' 和 'b' 都出现了不止一次。
```

示例 2：

```txt
输入：s = "aba"
输出：2

解释：
一种最大拆分方法为 ['a', 'ba']。
```

示例 3：

```txt
输入：s = "aa"
输出：1

解释：
无法进一步拆分字符串。
```

---

提示：

- `1 <= s.length <= 16`
- `s` 仅包含小写英文字母

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
