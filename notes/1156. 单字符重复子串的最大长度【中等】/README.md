# [1156. 单字符重复子串的最大长度【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1156.%20%E5%8D%95%E5%AD%97%E7%AC%A6%E9%87%8D%E5%A4%8D%E5%AD%90%E4%B8%B2%E7%9A%84%E6%9C%80%E5%A4%A7%E9%95%BF%E5%BA%A6%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/swap-for-longest-repeated-character-substring/)

如果字符串中的所有字符都相同，那么这个字符串是单字符重复的字符串。

给你一个字符串 `text`，你只能交换其中两个字符一次或者什么都不做，然后得到一些单字符重复的子串。返回其中最长的子串的长度。

---

示例 1：

```txt
输入：text = "ababa"
输出：3
```

示例 2：

```txt
输入：text = "aaabaaa"
输出：6
```

示例 3：

```txt
输入：text = "aaabbaaa"
输出：4
```

示例 4：

```txt
输入：text = "aaaaa"
输出：5
```

示例 5：

```txt
输入：text = "abcdef"
输出：1
```

---

提示：

- `1 <= text.length <= 20000`
- `text` 仅由小写英文字母组成。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
