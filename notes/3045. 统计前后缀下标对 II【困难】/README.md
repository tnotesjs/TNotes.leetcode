# [3045. 统计前后缀下标对 II【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/3045.%20%E7%BB%9F%E8%AE%A1%E5%89%8D%E5%90%8E%E7%BC%80%E4%B8%8B%E6%A0%87%E5%AF%B9%20II%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/count-prefix-and-suffix-pairs-ii/)

给你一个下标从 0 开始的字符串数组 `words`。

定义一个 布尔 函数 `isPrefixAndSuffix`，它接受两个字符串参数 `str1` 和 `str2` ：

- 当 `str1` 同时是 `str2` 的前缀（prefix）和后缀（suffix）时，`isPrefixAndSuffix(str1, str2)` 返回 `true`，否则返回 `false`。

> - 字符串的前缀是从字符串的开头开始并延伸到其中任意点的子串。
> - 字符串的后缀是从字符串的任意点开始并延伸到其末尾的子串

例如，`isPrefixAndSuffix("aba", "ababa")` 返回 `true`，因为 `"aba"` 既是 `"ababa"` 的前缀，也是 `"ababa"` 的后缀，但是 `isPrefixAndSuffix("abc", "abcd")` 返回 `false`。

以整数形式，返回满足 `i < j` 且 `isPrefixAndSuffix(words[i], words[j])` 为 `true` 的下标对 `(i, j)` 的 数量。

---

示例 1：

```txt
输入：words = ["a","aba","ababa","aa"]
输出：4
解释：在本示例中，计数的下标对包括：
i = 0 且 j = 1，因为 isPrefixAndSuffix("a", "aba") 为 true。
i = 0 且 j = 2，因为 isPrefixAndSuffix("a", "ababa") 为 true。
i = 0 且 j = 3，因为 isPrefixAndSuffix("a", "aa") 为 true。
i = 1 且 j = 2，因为 isPrefixAndSuffix("aba", "ababa") 为 true。
因此，答案是 4。
```

示例 2：

```txt
输入：words = ["pa","papa","ma","mama"]
输出：2
解释：在本示例中，计数的下标对包括：
i = 0 且 j = 1，因为 isPrefixAndSuffix("pa", "papa") 为 true。
i = 2 且 j = 3，因为 isPrefixAndSuffix("ma", "mama") 为 true。
因此，答案是 2。
```

示例 3：

```txt
输入：words = ["abab","ab"]
输出：0
解释：在本示例中，唯一有效的下标对是 i = 0 且 j = 1，但是 isPrefixAndSuffix("abab", "ab") 为 false。
因此，答案是 0。
```

---

提示：

- `1 <= words.length <= 10^5`
- `1 <= words[i].length <= 10^5`
- `words[i]` 仅由小写英文字母组成。
- 所有 `words[i]` 的长度之和不超过 `5 * 10^5`。

## 2. 🎯 s.1 - Z 函数 + 字典树

::: code-group

<<< ./solutions/1/1.js [js]
<<< ./solutions/1/1.c [c]
<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(L)$，L 为所有字符串的总长度
- 空间复杂度：$O(L)$，字典树空间

算法思路：

- 构建字典树，键为字符对 (word[i], word[n-1-i])
- 遍历每个 word 时沿字典树走，累加路径上的终止计数
- 遍历完后将终点计数加 1，保证只统计 i < j 的情况