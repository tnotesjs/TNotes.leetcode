# [0745. 前缀和后缀搜索【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0745.%20%E5%89%8D%E7%BC%80%E5%92%8C%E5%90%8E%E7%BC%80%E6%90%9C%E7%B4%A2%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/prefix-and-suffix-search/)

设计一个包含一些单词的特殊词典，并能够通过前缀和后缀来检索单词。

实现 `WordFilter` 类：

- `WordFilter(string[] words)` 使用词典中的单词 `words` 初始化对象。
- `f(string pref, string suff)` 返回词典中具有前缀 `pref` 和后缀 `suff` 的单词的下标。如果存在不止一个满足要求的下标，返回其中 **最大的下标** 。如果不存在这样的单词，返回 `-1` 。

**示例：**

```txt
输入
["WordFilter", "f"]
[[["apple"]], ["a", "e"]]
输出
[null, 0]
解释
WordFilter wordFilter = new WordFilter(["apple"]);
wordFilter.f("a", "e"); // 返回 0 ，因为下标为 0 的单词：前缀 prefix = "a" 且 后缀 suffix = "e" 。
```

---

**提示：**

- `1 <= words.length <= 10^4`
- `1 <= words[i].length <= 7`
- `1 <= pref.length, suff.length <= 7`
- `words[i]`、`pref` 和 `suff` 仅由小写英文字母组成
- 最多对函数 `f` 执行 `10^4` 次调用

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
