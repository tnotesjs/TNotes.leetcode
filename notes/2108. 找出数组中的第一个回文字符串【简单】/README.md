# [2108. 找出数组中的第一个回文字符串【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2108.%20%E6%89%BE%E5%87%BA%E6%95%B0%E7%BB%84%E4%B8%AD%E7%9A%84%E7%AC%AC%E4%B8%80%E4%B8%AA%E5%9B%9E%E6%96%87%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-first-palindromic-string-in-the-array/)

给你一个字符串数组 `words` ，找出并返回数组中的 **第一个回文字符串** 。如果不存在满足要求的字符串，返回一个 **空字符串** `""` 。

**回文字符串** 的定义为：如果一个字符串正着读和反着读一样，那么该字符串就是一个 **回文字符串** 。

---

- **示例 1：**

```
输入：words = ["abc","car","ada","racecar","cool"]
输出："ada"
解释：第一个回文字符串是 "ada" 。
注意，"racecar" 也是回文字符串，但它不是第一个。
```

- **示例 2：**

```
输入：words = ["notapalindrome","racecar"]
输出："racecar"
解释：第一个也是唯一一个回文字符串是 "racecar" 。
```

- **示例 3：**

```
输入：words = ["def","ghi"]
输出：""
解释：不存在回文字符串，所以返回一个空字符串。
```

---

**提示：**

- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` 仅由小写英文字母组成


## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::
