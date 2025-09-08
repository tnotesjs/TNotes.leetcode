# [1684. 统计一致字符串的数目【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1684.%20%E7%BB%9F%E8%AE%A1%E4%B8%80%E8%87%B4%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E6%95%B0%E7%9B%AE%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 Description](#1--description)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 Description

::: details [leetcode](https://leetcode.cn/problems/count-the-number-of-consistent-strings/)

给你一个由不同字符组成的字符串  `allowed`  和一个字符串数组  `words` 。如果一个字符串的每一个字符都在 `allowed`  中，就称这个字符串是 **一致字符串** 。

请你返回  `words`  数组中  **一致字符串** 的数目。

---

- **示例 1：**

```txt
输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
输出：2
解释：字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b' 。
```

- **示例 2：**

```txt
输入：allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
输出：7
解释：所有字符串都是一致的。
```

- **示例 3：**

```txt
输入：allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
输出：4
解释：字符串 "cc"，"acd"，"ac" 和 "d" 是一致字符串。
```

---

**提示：**

- `1 <= words.length <= 10^4`
- `1 <= allowed.length <= 26`
- `1 <= words[i].length <= 10`
- `allowed`  中的字符 **互不相同** 。
- `words[i]` 和  `allowed`  只包含小写英文字母。

:::

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/2.js [js-简洁版]

:::
