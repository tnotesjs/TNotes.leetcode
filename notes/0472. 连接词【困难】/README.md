# [0472. 连接词【困难】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0472.%20%E8%BF%9E%E6%8E%A5%E8%AF%8D%E3%80%90%E5%9B%B0%E9%9A%BE%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 暴力解法](#2--s1---暴力解法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/concatenated-words/)

给你一个 **不含重复** 单词的字符串数组 `words` ，请你找出并返回 `words` 中的所有 **连接词** 。

**连接词** 定义为：一个完全由给定数组中的至少两个较短单词（不一定是不同的两个单词）组成的字符串。

---

- **示例 1：**

```txt
输入：words = ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]
输出：["catsdogcats","dogcatsdog","ratcatdogcat"]

解释：
"catsdogcats" 由 "cats", "dog" 和 "cats" 组成;
"dogcatsdog" 由 "dog", "cats" 和 "dog" 组成;
"ratcatdogcat" 由 "rat", "cat", "dog" 和 "cat" 组成。
```

- **示例 2：**

```txt
输入：words = ["cat","dog","catdog"]
输出：["catdog"]
```

---

**提示：**

- `1 <= words.length <= 10^4`
- `1 <= words[i].length <= 30`
- `words[i]`  仅由小写英文字母组成。
- `words`  中的所有字符串都是 **唯一** 的。
- `1 <= sum(words[i].length) <= 10^5`

## 2. 🎯 s.1 - 暴力解法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(1)$
- 空间复杂度：$O(1)$
