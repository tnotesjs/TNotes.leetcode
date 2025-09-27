# [2452. 距离字典两次编辑以内的单词【中等】](https://github.com/tnotesjs/TNotes.leetcode/tree/main/notes/2452.%20%E8%B7%9D%E7%A6%BB%E5%AD%97%E5%85%B8%E4%B8%A4%E6%AC%A1%E7%BC%96%E8%BE%91%E4%BB%A5%E5%86%85%E7%9A%84%E5%8D%95%E8%AF%8D%E3%80%90%E4%B8%AD%E7%AD%89%E3%80%91)

<!-- region:toc -->

- [1. 📝 题目描述](#1--题目描述)
- [2. 🎯 s.1 - 解法 1](#2--s1---解法-1)
- [3. 🎯 s.2 - 解法 2](#3--s2---解法-2)
- [4. 🎯 s.3 - 解法 3](#4--s3---解法-3)

<!-- endregion:toc -->

## 1. 📝 题目描述

- [leetcode](https://leetcode.cn/problems/words-within-two-edits-of-dictionary/)

给你两个字符串数组  `queries` 和  `dictionary` 。数组中所有单词都只包含小写英文字母，且长度都相同。

一次 **编辑**  中，你可以从 `queries`  中选择一个单词，将任意一个字母修改成任何其他字母。从  `queries`  中找到所有满足以下条件的字符串：**不超过**  两次编辑内，字符串与  `dictionary`  中某个字符串相同。

请你返回  `queries`  中的单词列表，这些单词距离  `dictionary`  中的单词  **编辑次数**  不超过  **两次** 。单词返回的顺序需要与  `queries`  中原本顺序相同。

---

- **示例 1：**

```txt
输入：queries = ["word","note","ants","wood"], dictionary = ["wood","joke","moat"]
输出：["word","note","wood"]
解释：
- 将 "word" 中的 'r' 换成 'o' ，得到 dictionary 中的单词 "wood" 。
- 将 "note" 中的 'n' 换成 'j' 且将 't' 换成 'k' ，得到 "joke" 。
- "ants" 需要超过 2 次编辑才能得到 dictionary 中的单词。
- "wood" 不需要修改（0 次编辑），就得到 dictionary 中相同的单词。
所以我们返回 ["word","note","wood"] 。
```

- **示例 2：**

```txt
输入：queries = ["yes"], dictionary = ["not"]
输出：[]
解释：
"yes" 需要超过 2 次编辑才能得到 "not" 。
所以我们返回空数组。
```

---

**提示：**

- `1 <= queries.length, dictionary.length <= 100`
- `n == queries[i].length == dictionary[j].length`
- `1 <= n <= 100`
- 所有  `queries[i]` 和  `dictionary[j]`  都只包含小写英文字母。

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
