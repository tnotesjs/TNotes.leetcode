# [0966. 元音拼写检查器【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/0966.%20%E5%85%83%E9%9F%B3%E6%8B%BC%E5%86%99%E6%A3%80%E6%9F%A5%E5%99%A8%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希表](#2--s1---哈希表)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/vowel-spellchecker/)

在给定单词列表 `wordlist` 的情况下，我们希望实现一个拼写检查器，将查询单词转换为正确的单词。

对于给定的查询单词 `query`，拼写检查器将会处理两类拼写错误：

- 大小写：如果查询匹配单词列表中的某个单词（不区分大小写），则返回的正确单词与单词列表中的大小写相同。
  - 例如：`wordlist = ["yellow"]`, `query = "YellOw"`: `correct = "yellow"`
  - 例如：`wordlist = ["Yellow"]`, `query = "yellow"`: `correct = "Yellow"`
  - 例如：`wordlist = ["yellow"]`, `query = "yellow"`: `correct = "yellow"`
- 元音错误：如果在将查询单词中的元音 `('a', 'e', 'i', 'o', 'u')` 分别替换为任何元音后，能与单词列表中的单词匹配（不区分大小写），则返回的正确单词与单词列表中的匹配项大小写相同。
  - 例如：`wordlist = ["YellOw"]`, `query = "yollow"`: `correct = "YellOw"`
  - 例如：`wordlist = ["YellOw"]`, `query = "yeellow"`: `correct = ""` （无匹配项）
  - 例如：`wordlist = ["YellOw"]`, `query = "yllw"`: `correct = ""` （无匹配项）

此外，拼写检查器还按照以下优先级规则操作：

- 当查询完全匹配单词列表中的某个单词（区分大小写）时，应返回相同的单词。
- 当查询匹配到大小写问题的单词时，您应该返回单词列表中的第一个这样的匹配项。
- 当查询匹配到元音错误的单词时，您应该返回单词列表中的第一个这样的匹配项。
- 如果该查询在单词列表中没有匹配项，则应返回空字符串。

给出一些查询 `queries`，返回一个单词列表 `answer`，其中 `answer[i]` 是由查询 `query = queries[i]` 得到的正确单词。

---

示例 1：

```txt
输入：
wordlist = ["KiTe","kite","hare","Hare"],
queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]

输出：["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
```

---

示例 2：

```txt
输入：wordlist = ["yellow"], queries = ["YellOw"]
输出：["yellow"]
```

---

提示：

- `1 <= wordlist.length, queries.length <= 5000`
- `1 <= wordlist[i].length, queries[i].length <= 7`
- `wordlist[i]` 和 `queries[i]` 只包含英文字母

## 2. 🎯 s.1 - 哈希表

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(n \times m + q \times m)$，其中 n 是 wordlist 长度，q 是 queries 长度，m 是单词平均长度
- 空间复杂度：$O(n \times m)$，三个哈希表存储所有单词的不同形式

算法思路：

- 三个哈希表：分别存储完全匹配、忽略大小写匹配、忽略元音匹配的单词，按优先级依次查找
- 预处理 wordlist：遍历单词列表，将每个单词以三种形式存入对应哈希表，大小写和元音匹配只存储第一个出现的单词
- 元音替换：将所有元音字母（a/e/i/o/u）统一替换为特殊字符（如 '\*'），用于忽略元音差异的匹配
- 查询处理：对每个查询按优先级检查三个哈希表，找到第一个匹配项即返回，都不匹配则返回空字符串
- 优先级顺序：完全匹配 > 大小写不敏感 > 元音不敏感 > 无匹配
- 首次匹配原则：大小写和元音匹配时，返回 wordlist 中首次出现的单词，通过只在首次插入哈希表时保存实现
