# [0890. 查找和替换模式【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0890.%20%E6%9F%A5%E6%89%BE%E5%92%8C%E6%9B%BF%E6%8D%A2%E6%A8%A1%E5%BC%8F%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-and-replace-pattern/)

你有一个单词列表 `words` 和一个模式 `pattern`，你想知道 `words` 中的哪些单词与模式匹配。

如果存在字母的排列 `p`，使得将模式中的每个字母 `x` 替换为 `p(x)` 之后，我们就得到了所需的单词，那么单词与模式是匹配的。

_（回想一下，字母的排列是从字母到字母的双射：每个字母映射到另一个字母，没有两个字母映射到同一个字母。）_

返回 `words` 中与给定模式匹配的单词列表。

你可以按任何顺序返回答案。

示例：

```txt
输入：words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
输出：["mee","aqq"]
解释：
"mee" 与模式匹配，因为存在排列 {a -> m, b -> e, ...}。
"ccc" 与模式不匹配，因为 {a -> c, b -> c, ...} 不是排列。
因为 a 和 b 映射到同一个字母。
```

---

提示：

- `1 <= words.length <= 50`
- `1 <= pattern.length = words[i].length <= 20`

## 2. 🎯 s.1 - 双向映射

::: code-group

<<< ./solutions/1/1.c [c]

<<< ./solutions/1/1.js [js]

<<< ./solutions/1/1.py [py]

:::

- 时间复杂度：$O(n \times m)$，其中 n 是单词数，m 是单词长度
- 空间复杂度：$O(m)$

算法思路：

- 对每个单词建立与模式的双向映射（word→pattern 和 pattern→word）
- 若映射冲突则不匹配
