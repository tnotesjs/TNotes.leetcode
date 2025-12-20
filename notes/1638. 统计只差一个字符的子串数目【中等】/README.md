# [1638. 统计只差一个字符的子串数目【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1638.%20%E7%BB%9F%E8%AE%A1%E5%8F%AA%E5%B7%AE%E4%B8%80%E4%B8%AA%E5%AD%97%E7%AC%A6%E7%9A%84%E5%AD%90%E4%B8%B2%E6%95%B0%E7%9B%AE%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-substrings-that-differ-by-one-character/)

给你两个字符串 `s` 和 `t` ，请你找出 `s` 中的非空子串的数目，这些子串满足替换 一个不同字符 以后，是 `t` 串的子串。换言之，请你找到 `s` 和 `t` 串中 恰好 只有一个字符不同的子字符串对的数目。

比方说， `"computer"` and `"computation"` 只有一个字符不同： `'e'`/`'a'` ，所以这一对子字符串会给答案加 1 。

请你返回满足上述条件的不同子字符串对数目。

一个 子字符串 是一个字符串中连续的字符。

---

- 示例 1：

```txt
输入：s = "aba", t = "baba"
输出：6
解释：以下为只相差 1 个字符的 s 和 t 串的子字符串对：
("aba", "baba")
("aba", "baba")
("aba", "baba")
("aba", "baba")
("aba", "baba")
("aba", "baba")
加粗部分分别表示 s 和 t 串选出来的子字符串。
```

- 示例 2：

```txt
输入：s = "ab", t = "bb"
输出：3
解释：以下为只相差 1 个字符的 s 和 t 串的子字符串对：
("ab", "bb")
("ab", "bb")
("ab", "bb")
加粗部分分别表示 s 和 t 串选出来的子字符串。
```

- 示例 3：

```txt
输入：s = "a", t = "a"
输出：0
```

- 示例 4：

```txt
输入：s = "abe", t = "bbc"
输出：10
```

---

提示：

- `1 <= s.length, t.length <= 100`
- `s` 和 `t` 都只包含小写英文字母。

## 2. 🎯 s.1 - 解法 1

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 3. 🎯 s.2 - 解法 2

::: code-group

<<< ./solutions/2/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$

## 4. 🎯 s.3 - 解法 3

::: code-group

<<< ./solutions/3/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
