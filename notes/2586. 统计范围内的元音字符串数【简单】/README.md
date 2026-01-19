# [2586. 统计范围内的元音字符串数【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2586.%20%E7%BB%9F%E8%AE%A1%E8%8C%83%E5%9B%B4%E5%86%85%E7%9A%84%E5%85%83%E9%9F%B3%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%95%B0%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 遍历统计](#2--s1---遍历统计)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-the-number-of-vowel-strings-in-range/)

给你一个下标从 0 开始的字符串数组 `words` 和两个整数：`left` 和 `right`。

如果字符串以元音字母开头并以元音字母结尾，那么该字符串就是一个 元音字符串，其中元音字母是 `'a'`、`'e'`、`'i'`、`'o'`、`'u'`。

返回 `words[i]` 是元音字符串的数目，其中 `i` 在闭区间 `[left, right]` 内。

---

示例 1：

```txt
输入：words = ["are","amy","u"], left = 0, right = 2
输出：2

解释：
- "are" 是一个元音字符串，因为它以 'a' 开头并以 'e' 结尾。
- "amy" 不是元音字符串，因为它没有以元音字母结尾。
- "u" 是一个元音字符串，因为它以 'u' 开头并以 'u' 结尾。
在上述范围中的元音字符串数目为 2。
```

---

示例 2：

```txt
输入：words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4
输出：3

解释：
- "aeo" 是一个元音字符串，因为它以 'a' 开头并以 'o' 结尾。
- "mu" 不是元音字符串，因为它没有以元音字母开头。
- "ooo" 是一个元音字符串，因为它以 'o' 开头并以 'o' 结尾。
- "artro" 是一个元音字符串，因为它以 'a' 开头并以 'o' 结尾。
在上述范围中的元音字符串数目为 3。
```

---

提示：

- `1 <= words.length <= 1000`
- `1 <= words[i].length <= 10`
- `words[i]` 仅由小写英文字母组成
- `0 <= left <= right < words.length`

## 2. 🎯 s.1 - 遍历统计

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(N)$，其中 N 是 right - left + 1，需要遍历指定范围内的所有字符串
- 空间复杂度：$O(1)$，只使用常数额外空间

算法思路：

- 使用集合存储所有元音字母 'a', 'e', 'i', 'o', 'u'
- 遍历区间 [left, right] 内的每个字符串
- 检查字符串的首字符和尾字符是否都在元音集合中
- 统计满足条件的字符串数量并返回
