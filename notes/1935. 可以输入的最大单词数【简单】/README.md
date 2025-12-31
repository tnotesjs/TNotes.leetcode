# [1935. 可以输入的最大单词数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1935.%20%E5%8F%AF%E4%BB%A5%E8%BE%93%E5%85%A5%E7%9A%84%E6%9C%80%E5%A4%A7%E5%8D%95%E8%AF%8D%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 位集过滤单词](#2--s1---位集过滤单词)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/maximum-number-of-words-you-can-type/)

键盘出现了一些故障，有些字母键无法正常工作。而键盘上所有其他键都能够正常工作。

给你一个由若干单词组成的字符串 `text` ，单词间由单个空格组成（不含前导和尾随空格）；另有一个字符串 `brokenLetters` ，由所有已损坏的不同字母键组成，返回你可以使用此键盘完全输入的 `text` 中单词的数目。

---

示例 1：

```txt
输入：text = "hello world", brokenLetters = "ad"
输出：1
解释：无法输入 "world" ，因为字母键 'd' 已损坏。
```

示例 2：

```txt
输入：text = "leet code", brokenLetters = "lt"
输出：1
解释：无法输入 "leet" ，因为字母键 'l' 和 't' 已损坏。
```

示例 3：

```txt
输入：text = "leet code", brokenLetters = "e"
输出：0
解释：无法输入任何单词，因为字母键 'e' 已损坏。
```

---

提示：

- `1 <= text.length <= 10^4`
- `0 <= brokenLetters.length <= 26`
- `text` 由若干用单个空格分隔的单词组成，且不含任何前导和尾随空格
- 每个单词仅由小写英文字母组成
- `brokenLetters` 由 互不相同 的小写英文字母组成

## 2. 🎯 s.1 - 位集过滤单词

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(T)$
- 空间复杂度：$O(1)$

解题思路：

- 预先把坏键存入 26 位集合，遍历每个单词，若任一字符在坏集合中则跳过，否则计数。
