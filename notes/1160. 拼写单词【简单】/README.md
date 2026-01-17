# [1160. 拼写单词【简单】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/1160.%20%E6%8B%BC%E5%86%99%E5%8D%95%E8%AF%8D%E3%80%90%E7%AE%80%E5%8D%95%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 哈希计数法](#2--s1---哈希计数法)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/find-words-that-can-be-formed-by-characters)

给定一个字符串数组 `words` 和一个字符串 `chars`。

如果字符串可以由 `chars` 中的字符组成（每个字符在每个 `words` 中只能使用一次），则认为它是好的。

返回 `words` 中所有好的字符串的长度之和。

---

示例 1：

```txt
输入：words = ["cat","bt","hat","tree"], chars = "atach"
输出：6

解释：
可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
```

---

示例 2：

```txt
输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
输出：10

解释：
可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
```

---

提示：

- `1 <= words.length <= 1000`
- `1 <= words[i].length, chars.length <= 100`
- `words[i]` 和 `chars` 中都仅包含小写英文字母

## 2. 🎯 s.1 - 哈希计数法

::: code-group

<<< ./solutions/1/1.js [js]

:::

- 时间复杂度：$O(L + \sum w_i)$，其中 $L$ 为 `chars` 长度，$w_i$ 为每个单词长度，需遍历所有字符
- 空间复杂度：$O(S)$，其中 $S$ 为字符集大小（本题为常数 26），用于存储字符出现频率

算法思路：

- 使用长度为 26 的数组统计 `chars` 中每个字母的出现次数
- 遍历 `words` 数组，对每个单词独立统计字母频率
- 比较两个频率数组，若单词中所有字母出现的次数均小于等于 `chars` 中的次数，则累加该单词长度
